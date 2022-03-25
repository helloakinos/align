const isLoggedInSeeker = require("../authFuncs/auth.js").isLoggedInSeeker;
const isLoggedInFinder = require("../authFuncs/auth.js").isLoggedInFinder;

// ================ Router for  job postings ===================

class ViewRouter {
  constructor(finderProfileService, finderPreviewService, express) {
    this.finderProfileService = finderProfileService;
    this.finderPreviewService = finderPreviewService;
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
    router.get(
      "/impactFinderProfile/:id",
      /*isLoggedInFinder,*/
      this.getImpactFinderProfile.bind(this)
    );
    router.get("/jobBoard", this.getJobBoard.bind(this));
    router.get("/ImpactSeekerPreview", this.getImpactSeekerPreview.bind(this));
    router.get("/ImpactSeekerProfile", this.getImpactSeekerProfile.bind(this));
    router.get("/jobApplicationForm", this.getJobApplicationForm.bind(this));
    return router;
  }

  getHome(req, res) {
    res.render("home", {
      layout: "main",
    });
  }
  getLogin(req, res) {
    res.render("login", {
      layout: "main",
    });
  }
  getSignup(req, res) {
    res.render("signup", {
      layout: "main",
    });
  }
  getImpactFinderPreview(req, res) {
    this.finderPreviewService.allFinders().then((allFinders) => {
      console.log(allFinders);
      res.render("impactFinderPreview", {
        layout: "main",
        allFinders: allFinders,
      });
    });
  }

  getFinderProfile(req, res) {
    res.render("finderProfile", {
      layout: "main",
    });
  }

  getImpactFinderProfile(req, res) {
    console.log(req);
    let finderId = req.params.id;
    this.finderProfileService.listprofile(finderId).then((profile) => {
      console.log(profile);
      res.render("impactFinderProfile", {
        layout: "main",
        profile: profile[0],
        profile_customfields: profile[1],
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
    res.render("impactSeekerPreview", {
      layout: "main",
    });
  }

  getImpactSeekerProfile(req, res) {
    res.render("impactSeekerProfile", {
      layout: "main",
    });
  }

  getJobApplicationForm(Req, res) {
    res.render("jobApplicationForm", {
      layout: "main",
    });
  }
}

module.exports = ViewRouter;
