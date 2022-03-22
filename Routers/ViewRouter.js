const isLoggedInSeeker = require("../authFuncs/auth.js").isLoggedInSeeker;
const isLoggedInFinder = require("../authFuncs/auth.js").isLoggedInFinder;

// ================ Router for  job postings ===================

class ViewRouter {
  constructor(finderService, express) {
    this.finderService = finderService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get("/", this.getHome.bind(this));
    router.get("/login", this.getLogin.bind(this));
    router.get("/signup", this.getSignup.bind(this));
    router.get("/impactFinderPreview", this.getImpactFinderPreview.bind(this));
    router.get(
      "/myfinderprofile",
      /*isLoggedInFinder,*/
      this.getFinderProfile.bind(this)
    );
    return router;
  }

  getHome(req, res) {
    res.render("home", {
      layout: "main",
    });
  }
  getLogin(req, res) {
    res.render("login");
  }
  getSignup(req, res) {
    res.render("signup");
  }
  getImpactFinderPreview(req, res) {
    res.render("impactFinderPreview", {
      layout: "main",
    });
  }

  getFinderProfile(req, res) {
    res.render("impactFinderProfile", {
      layout: "main",
    });
  }
}

module.exports = ViewRouter;
