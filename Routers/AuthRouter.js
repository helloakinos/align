const express = require("express");
const passportFunctions = require("../passport");

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
        successRedirect: "/todolist",
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
        successRedirect: "/todolist",
        failureRedirect: "/error",
      })
    );

    router.get(
      "/auth/facebook",
      passportFunctions.authenticate("facebook", {
        scope: ["email", "public_profile"],
      })
    );

    router.get(
      "/auth/facebook/callback",
      passportFunctions.authenticate("facebook", {
        successRedirect: "/todolist",
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
