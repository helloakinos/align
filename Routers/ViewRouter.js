const express = require("express");
const isLoggedInSeeker = require("../authFuncs/auth.js").isLoggedInSeeker;
const isLoggedInFinder = require("../authFuncs/auth.js").isLoggedInFinder;

class ViewRouter {
  router() {
    let router = express.Router();
    router.get("/", this.getHome.bind(this));
    router.get("/login", this.getLogin.bind(this));
    router.get("/signup", this.getSignup.bind(this));
    router.get("/homeFinder", isLoggedInFinder, this.getHomeFinder.bind(this));
    router.get("/homeSeeker", isLoggedInSeeker, this.getHomeSeeker.bind(this));
    router.get("/error", this.getError.bind(this));
    return router;
  }

  getHome(req, res) {
    res.render("home");
  }

  getLogin(req, res) {
    res.render("login");
  }
  getSignup(req, res) {
    res.render("signup");
  }
  getHomeFinder(req, res) {
    res.render("homeFinder");
  }
  getHomeSeeker(req, res) {
    res.render("homeSeeker");
  }
  getError(req, res) {
    res.render("error");
  }
}

module.exports = ViewRouter;
