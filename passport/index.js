/**********************************************
 * Passport Configuration
 * ==================================
 *
 * 1. Authentication Strategy
 *      passport.use(new LocalStrategy)
 *      verify callback
 *          - Strategies require verify callback ->
 *          find the user that possesses a set of
 *          credentials
 *      - when passport authenticates a request, it parses
 *      the credentials contained in the request
 *
 *
 * 2. Application Middleware
 *      -
 *
 * 3. Sessions -> essentially checks for that user using the serialize and deserialize user function
 *      - if authentication succeeds, a session will be
 *      established and maintained via the cookie in the
 *      browser
 *      - serialize and deserialize user
 *
 ***********************************************/

const passport = require("passport");

const googleStrategy = require("./google").google;
const facebookStrategy = require("./facebook").facebook;
const FloginStrategy = require("./FloginStrategy.js");
const SloginStrategy = require("./SloginStrategy.js");
const FsignupStrategy = require("./FsignupStrategy.js");
const SsignupStrategy = require("./SsignupStrategy.js");
const serializeUser = require("./serializeDeserialize")
  .serializeUser;
const deserializeUser = require("./serializeDeserialize")
  .deserializeUser;

passport.use("google", googleStrategy);
passport.use("facebook", facebookStrategy);
passport.use("flocal-login", FloginStrategy);
passport.use("slocal-login", SloginStrategy);
passport.use("flocal-signup", FsignupStrategy);
passport.use("slocal-signup", SsignupStrategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);
module.exports = passport;
