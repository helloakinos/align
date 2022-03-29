// ======== Importing npm packages ========

require("dotenv").config();

const express = require("express");
const { engine } = require("express-handlebars");
const msal = require("@azure/msal-node");
require("./passport/microsoft");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const methodOverride = require("method-override");
const morgan = require("morgan");
// const config = require('./config.js');

const config = require("./config.js");
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

const passport = require("passport");
// const flash = require("express-flash"); // this is a package that will allow you to render short flash messages on your login screens: wrong password, existing username etc.
const session = require("express-session");

const app = express();
app.use(morgan("dev"));
app.use(methodOverride());
port = 3000;

// ========== In-built Node Modules ================
const fs = require("fs");
const path = require("path");
const https = require("https");

// =========== Local Routers ===================
const AuthRouter = require("./Routers/AuthRouter");
const ViewRouter = require("./Routers/ViewRouter");
const FProfileRouter = require("./Routers/FProfileRouter");
const SProfileRouter = require("./Routers/SProfileRouter");
const JobRouter = require("./Routers/JobRouter");

// =========== Local Services ===================
const FinderProfileService = require("./Service/FinderProfileService");
const SeekerProfileService = require("./Service/SeekerProfileService");
const ExploreService = require("./Service/ExploreService");
const JobService = require("./Service/JobService");

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
app.use(passport.initialize());
app.use(passport.session());

// set up Microsoft session middleware
if (config.useMongoDBSessionStore) {
  mongoose.connect(config.databaseUri);
  app.use(
    expressSession({
      secret: "secret",
      cookie: { maxAge: config.mongoDBSessionMaxAge * 1000 },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        clear_interval: config.mongoDBSessionMaxAge,
      }),
    })
  );
} else {
  app.use(
    expressSession({
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: false,
    })
  );
}

// =========== Set up Instances for Routers & Services ============
const finderProfileService = new FinderProfileService(knex);
const seekerProfileService = new SeekerProfileService(knex);
const jobService = new JobService(knex);
const exploreService = new ExploreService(knex);
const viewRouter = new ViewRouter(
  finderProfileService,
  exploreService,
  express
);
const fprofileRouter = new FProfileRouter(finderProfileService, express);
const sprofileRouter = new SProfileRouter(seekerProfileService, express);
const jobRouter = new JobRouter(jobService, express);
const authRouter = new AuthRouter();

// ========= Set up Routers ================

app.use("/", viewRouter.router());
app.use("/", authRouter.router());
app.use("/", fprofileRouter.router());
app.use("/", sprofileRouter.router());
app.use("/", jobRouter.router());

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key"),
};

// ============ Activate Server ===============

https
  .createServer(options, app)
  .listen(port, () => console.log("listening on port: " + port));

module.exports = app;
