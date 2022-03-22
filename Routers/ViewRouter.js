const { router } = require("../Index.js");
const isLoggedIn = require("../authFuncs/auth.js").isLoggedIn;

// ================ Router for  job postings ===================

class FinderRouter {
  constructor(finderService, express) {
    this.finderService = finderService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get("/", this.getHome.bind(this));
    router.get("/login", this.getLogin.bind(this));
    router.get("/signup", this.getSignup.bind(this));
    router.get(
      "/myfinderprofile",
      isLoggedIn,
      this.getFinderProfile.bind(this)
    );

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

  getFinderProfile(req, res) {
    res.render("finderProfile");
  }
}

module.exports = FinderRouter;
