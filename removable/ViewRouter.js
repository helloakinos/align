const express = require("express");
const isLoggedIn = require("../authFuncs/auth.js").isLoggedIn;
const isLoggedInAdmin = require("../authFuncs/auth.js").isLoggedInAdmin;

class ViewRouter {
  router() {
    let router = express.Router();
    router.get("/", this.getHome.bind(this));
    router.get("/login", this.getLogin.bind(this));
    router.get("/signup", this.getSignup.bind(this));
    router.get("/todolist", isLoggedIn, this.getTodoList.bind(this));
    router.get("/admin", isLoggedInAdmin, this.getAdmin.bind(this));
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
  getTodoList(req, res) {
    res.render("todolist");
  }
  getAdmin(req, res) {
    res.send("ADMIN SECRET DATA");
  }
  getError(req, res) {
    res.render("error");
  }
}

module.exports = ViewRouter;
