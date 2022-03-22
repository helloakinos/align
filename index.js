// ======== Importing npm packages ========

require("dotenv").config();

const express = require("express");
const { engine } = require("express-handlebars");
const msal = require('@azure/msal-node');
const passportFunctions = require("./passport");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");


const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

const passport = require("passport");
// const flash = require("express-flash"); // this is a package that will allow you to render short flash messages on your login screens: wrong password, existing username etc.
const session = require("express-session");

const app = express();
port = 3000;

// ========== In-built Node Modules ================
const fs = require("fs");
const path = require("path");
const https = require("https");


// =========== Local Modules ===================
const JobRouter = require("./Routers/JobRouter");
const AuthRouter = require("./Routers/AuthRouter");
const authRouter = new AuthRouter();
const JobService = require("./Service/JobService");
const ViewRouter = require("./Routers/ViewRouter");
const viewRouter = new ViewRouter();

// import passportconfig and isLogged in function here

// ========= Set up Express Handlebars ==============
app.use(cookieParser());
app.set("view engine", "hbs");
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
app.engine(
  "hbs",
  engine({
    layoutsDir: "",
    defaultLayout: "",
    extname: "hbs",
    partialsDir: `${__dirname}/views/partials`,
  })
);

// ========= Set up Express  ================
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// =========== Set up Passport ============
// commented this out for now, so we can implement our  once ready
// app.use(flash());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// =========== Set up JobService ============
const jobService = new JobService(knex);

// =========== Homepage set up ============
// can add isLoggedin function in here when implementing authentications
// app.get(
//   "/",
//   /*isloggedin, */ (req, res) => {
//     console.log(`current user: `);
//     res.render("home", {
//       layout: "main",
//       //   applicant: applicant,
//       //   company: company,
//     });
//   }
// );

// ========= Set up Routers ================

// Routers not active yet, awaiting implementation
// app.use("/", new AuthRouter(express, passport).router());
// app.use("/api/jobs", new JobRouter(jobService, express).router());

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key"),
};

// ============ Activate Server ===============
https
  .createServer(options, app)
  .listen(port, () => console.log("listening on port: " + port));

module.exports = app;
