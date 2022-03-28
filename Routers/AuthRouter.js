require("dotenv").config();
const bunyan = require('bunyan');
const express = require("express");
const msal = require("@azure/msal-node");
// const micConfig = require("../microsoftConfig.js");
// const pca = new msal.ConfidentialClientApplication(micConfig);
const passportFunctions = require("../passport");
// const config = require('../config');

const config = require("../config");
const log = bunyan.createLogger({
  name: 'Yalalign Web Application'
});


class AuthRouter {
  router() {
    let router = express.Router();

    router.post(
      "/signupFormFinder",
      passportFunctions.authenticate("flocal-signup", {
        successRedirect: "/loginSignup",
        failureRedirect: "/error",
      })
    );

    router.post(
      "/signupFormSeeker",
      passportFunctions.authenticate("slocal-signup", {
        successRedirect: "/loginSignup",
        failureRedirect: "/error",
      })
    );

    router.post(
      "/loginFormFinder",
      passportFunctions.authenticate("flocal-login", {
        successRedirect: "/",
        failureRedirect: "/error",
      })
    );

    router.post(
      "/loginFormSeeker",
      passportFunctions.authenticate("slocal-login", {
        successRedirect: "/",
        failureRedirect: "/error",
      })
    );

    router.get(
      "/auth/gmail",
      passportFunctions.authenticate("google", {
        scope: ["profile", "email"],
      })
    );

    router.get(
      "/auth/gmail/callback",
      passportFunctions.authenticate("google", {
        successRedirect: "/",
        failureRedirect: "/error",
      })
    );

    router.get('/auth/microsoft',
  function(req, res, next) {
    passportFunctions.authenticate("azuread-openidconnect", 
      { 
        response: res,                      // required
        resourceURL: config.resourceURL,    // optional. Provide a value if you want to specify the resource.
        customState: 'my_state',            // optional. Provide a value if you want to provide custom state value.
        failureRedirect: '/' 
      }
      )(req, res, next);
      console.log("lookout "+ res);
  },
  function(req, res) {
    log.info('Login was called in the Sample');
    res.redirect('/');
});

router.get('/auth/openid/return',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        // response: res,    // required
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    log.info('We received a return from AzureAD.');
     res.redirect('/');
  });

// 'GET returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// query (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
// router.get('/auth/openid/return',
//   function(req, res, next) {
//     passport.authenticate("azuread-openidconnect", 
//       { 
//         response: res,    // required
//         failureRedirect: '/'  
//       }
//     )(req, res, next);
//   },
//   function(req, res) {
//     console.log("I got a response of " + res);
//     log.info('We received a return from AzureAD.');
//     res.redirect('/');
//   });

// 'POST returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// body (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
router.post('/microsoftredirect',
  function(req, res, next) {
    console.log("bibek, check here");
    passportFunctions.authenticate('azuread-openidconnect', 
      { 
        // successRedirect: "/",
        response: res,
        failureRedirect: "/error",
      }
    )
    (req, res, next);
  },
  function(req, res) {
    log.info('We received a return from AzureAD.');
    res.redirect("/");
  }
)
    //   router.get('/auth/microsoft', (req, res) => {
    //     const authCodeUrlParameters = {
    //         scopes: ["user.read"],
    //         redirectUri: REDIRECT_URI,
    //     };

    //     // get url to sign user in and consent to scopes needed for application
    //     pca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
    //         res.redirect(response);
    //     }).catch((error) => console.log(JSON.stringify(error)));
    // });

    // router.get('/microsoftredirect', (req, res) => {
    //     const tokenRequest = {
    //         code: req.query.code,
    //         scopes: ["user.read"],
    //         redirectUri: REDIRECT_URI,
    //     };

    //     pca.acquireTokenByCode(tokenRequest).then((response) => {
    //         console.log("\nResponse: \n:", response);
    //         res.sendStatus(200);
    //         // res.send("OK");
    //     }).catch((error) => {
    //         console.log(error);
    //         res.status(500).send(error);
    //     });
    // });

    router.get(
      "/auth/facebook",
      passportFunctions.authenticate("facebook", {
        scope: ["email", "public_profile"],
      })
    );

    router.get(
      "/auth/facebook/callback",
      passportFunctions.authenticate("facebook", {
        successRedirect: "/",
        failureRedirect: "/error",
      })
    );

    router.get("/logout", (req, res) => {
      req.logout();
      res.render("login");
    });

    return router;
  }
}

module.exports = AuthRouter;
