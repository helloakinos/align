/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
require("dotenv").config();
const express = require("express");
const msal = require('@azure/msal-node');
const passportFunctions = require("./passport");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const https = require("https");
const fs = require("fs");

const AuthRouter = require("./routers/AuthRouter");
const authRouter = new AuthRouter();
const ViewRouter = require("./routers/viewRouter");
const viewRouter = new ViewRouter();

const {engine} = require("express-handlebars");
var app = express();

const SERVER_PORT = process.env.PORT;
const REDIRECT_URI = "http://localhost:3000/redirect";

app.use(express.static("assets"));
app.use(cookieParser());
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  // Creating a new session generates a new session id, stores that in a session cookie, and
  expressSession({
    secret: "secret",
    // save the user
    // if false, will not save session to browser
    resave: true,
    // if saveUninitialized is false, session object will not be stored in sesion store
    saveUninitialized: true,
  })
);

app.use(passportFunctions.initialize());
// This line of code allows you to use sessions, so it means not only do you authorise your students with login you also need to access the user session.
app.use(passportFunctions.session());

app.use("/", authRouter.router());
app.use("/", viewRouter.router());

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key"),
};


// Before running the sample, you will need to replace the values in the config, 
// including the clientSecret
const config = {
    auth: {
        clientId: process.env.MICROSOFTCLIENTID,
        authority: "https://login.microsoftonline.com/common",
        clientSecret: process.env.MICROSOFTCLIENTSECRET
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

// Create msal application object
const pca = new msal.ConfidentialClientApplication(config);

// Create Express App and Routes

app.get('/', (req, res) => {
    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: REDIRECT_URI,
    };

    // get url to sign user in and consent to scopes needed for application
    pca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
        res.redirect(response);
    }).catch((error) => console.log(JSON.stringify(error)));
});

app.get('/redirect', (req, res) => {
    const tokenRequest = {
        code: req.query.code,
        scopes: ["user.read"],
        redirectUri: REDIRECT_URI,
    };

    pca.acquireTokenByCode(tokenRequest).then((response) => {
        console.log("\nResponse: \n:", response);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
});


app.listen(SERVER_PORT, () => console.log(`Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`))
