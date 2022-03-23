require("dotenv").config();
const express = require("express");
const msal = require('@azure/msal-node');
const micConfig = require("../microsoftConfig.js");
const pca = new msal.ConfidentialClientApplication(micConfig);
const passportFunctions = require("../passport");
const REDIRECT_URI = "http://localhost:3000/microsoftredirect";

class AuthRouter {
  router() {
    let router = express.Router();

    router.post(
      "/signup",
      passportFunctions.authenticate("local-signup", {
        successRedirect: "/login",
        failureRedirect: "/error",
      })
    );

    router.post(
      "/login",
      passportFunctions.authenticate("local-login", {
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
