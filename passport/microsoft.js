
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const passport = require('passport');
const config = require("../config.js");

const microsoftConfig = {
  identityMetadata: config.creds.identityMetadata,
  clientID: config.creds.clientID,
  responseType: config.creds.responseType,
  responseMode: config.creds.responseMode,
  redirectUrl: config.creds.redirectUrl,
  allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
  clientSecret: config.creds.clientSecret,
  validateIssuer: config.creds.validateIssuer,
  isB2C: config.creds.isB2C,
  issuer: config.creds.issuer,
  passReqToCallback: config.creds.passReqToCallback,
  scope: config.creds.scope,
  loggingLevel: config.creds.loggingLevel,
  nonceLifetime: config.creds.nonceLifetime,
  nonceMaxAmount: config.creds.nonceMaxAmount,
  useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
  cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
  clockSkew: config.creds.clockSkew,
}
// passport.use(new OIDCStrategy({
//     identityMetadata: config.creds.identityMetadata,
//     clientID: config.creds.clientID,
//     responseType: config.creds.responseType,
//     responseMode: config.creds.responseMode,
//     redirectUrl: config.creds.redirectUrl,
//     allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
//     clientSecret: config.creds.clientSecret,
//     validateIssuer: config.creds.validateIssuer,
//     isB2C: config.creds.isB2C,
//     issuer: config.creds.issuer,
//     passReqToCallback: config.creds.passReqToCallback,
//     scope: config.creds.scope,
//     loggingLevel: config.creds.loggingLevel,
//     nonceLifetime: config.creds.nonceLifetime,
//     nonceMaxAmount: config.creds.nonceMaxAmount,
//     useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
//     cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
//     clockSkew: config.creds.clockSkew,
//   },
  function microsoftCallback(iss, sub, profile, accessToken, refreshToken, done) {
    if (!profile.oid) {
      return done(new Error("No oid found"), null);
    }
    // asynchronous verification, for effect...
    process.nextTick(function () {
      findByOid(profile.oid, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          // "Auto-registration"
          users.push(profile);
          return done(null, profile);
        }
        return done(null, user);
      });
    });
  }

const microsoft = passport.use (new OIDCStrategy(microsoftConfig, microsoftCallback));
module.exports = {microsoft: microsoft};