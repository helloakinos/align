const { isLoggedIn } = require("../authFuncs/auth");
const { isGuest } = require("../authFuncs/auth");
const { currentUserType } = require("../authFuncs/currentUser");

// ================ Router for  job postings ===================

class ViewRouter {
  constructor(finderProfileService, exploreService, express) {
    this.finderProfileService = finderProfileService;
    this.exploreService = exploreService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get("/", isGuest, this.getHome.bind(this));
    router.get("/loginSignup", this.getLogin.bind(this));
    router.get("/impactFinderPreview", this.getImpactFinderPreview.bind(this));
    router.get("/jobBoard", this.getJobBoard.bind(this));
    router.get(
      "/ImpactSeekerPreview",
      isLoggedIn,
      this.getImpactSeekerPreview.bind(this)
    );
    router.get("/jobApplicationForm", this.getJobApplicationForm.bind(this));
    return router;
  }

  getHome(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      let userData = currentUserType(req.user);
      console.log(userData);
    }
    console.log(isGuest);
    res.render("home", {
      layout: "main",
      isGuest: isGuest,
      userData: userData,
    });
  }
  getLogin(req, res) {
    res.render("login", {
      layout: "main",
    });
  }

  getImpactFinderPreview(req, res) {
    this.exploreService.allFinders().then((allFinders) => {
      console.log(allFinders);
      res.render("impactFinderPreview", {
        layout: "main",
        allFinders: allFinders,
      });
    });
  }

  getJobBoard(req, res) {
    res.render("jobBoard", {
      layout: "main",
      job: [
        { title: "Animal Saver", finder_name: "PUC" },
        { title: "Food Saver", finder_name: "Precious food" },
      ],
    });
  }

  getImpactSeekerPreview(req, res) {
    this.exploreService.allSeekers().then((allSeekers) => {
      console.log(allSeekers);
      res.render("impactSeekerPreview", {
        layout: "main",
        allSeekers: allSeekers,
      });
    });
  }

  getJobApplicationForm(Req, res) {
    res.render("jobApplicationForm", {
      layout: "main",
    });
  }
}

module.exports = ViewRouter;
