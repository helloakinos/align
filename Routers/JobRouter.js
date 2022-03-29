const { isCurrentUser } = require("../authFuncs/currentUser");
const { isLoggedIn } = require("../authFuncs/auth");
const { isGuest } = require("../authFuncs/auth");
const { currentUserType } = require("../authFuncs/currentUser");

class JobRouter {
  constructor(jobService, express) {
    this.jobService = jobService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    // router.get("/job", this.getFinderProfile.bind(this));
    router.get("/jobPage/:id", isGuest, this.getJobProfile.bind(this));
    return router;
  }


  getJobProfile(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    let jobId = req.params.id;
    this.jobService.JobProfile(jobId).then((JobProfile) => {
      console.log(JobProfile);
      res.render("jobPage", {
        layout: "main",
        profile: JobProfile,
      });
    });
  }
}

module.exports = JobRouter;
