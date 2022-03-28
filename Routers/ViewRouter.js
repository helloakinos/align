// const { isCurrentFinder } = require("../authFuncs/currentUser");
const { isCurrentUser } = require("../authFuncs/currentUser");
const { isLoggedIn } = require("../authFuncs/auth");
const { isGuest } = require("../authFuncs/auth");

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
    router.get("/loginSignup",isGuest, this.getLogin.bind(this));
    router.get("/login", this.getLogin.bind(this));
    router.get("/impactFinderPreview",isGuest, this.getImpactFinderPreview.bind(this));
    router.get("/jobBoard",isGuest, this.getJobBoard.bind(this));
    router.get(
      "/ImpactSeekerPreview",
      isGuest,
      isLoggedIn,
      this.getImpactSeekerPreview.bind(this)
    );
    router.get("/jobApplicationForm", isGuest,this.getJobApplicationForm.bind(this));
    // Claire added this
    router.get('/logout', function (req, res) {
      req.session.passport.user = null;
      res.redirect('/loginSignUp');
    });
    // router.get('/myProfile',function(req,res){
    //   isCurrentUser().then((theRightProfile)=>{
    //     if(theRightProfile.userData.finder_id)
    //     res.redirect('/finderprofile/'+theRightProfile.userData.finder_id)
    //   })
    // })
    return router;
  }


  getHome(req, res) {
    console.log(`Is the user persisting`);
    console.log(req.user);
    let isGuest = req.res.locals.isGuest;
    console.log(isGuest);
    res.render("home", {
      layout: "main",
      isGuest: isGuest,
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
    this.exploreService.allJobs().then((allJobs)=>{
      console.log(allJobs)
      res.render("jobBoard", {
        layout: "main",
        allJobs: allJobs,
      })
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
