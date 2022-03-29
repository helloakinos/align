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
    router.get("/jobPage/:id", isGuest, this.getJobProfile.bind(this));
    return router
  }
    getJobProfile(req, res) {
      let isGuest = req.res.locals.isGuest;
      let userData = {};
      if (!isGuest) {
        userData = currentUserType(req.user);
      }
      let finderId = req.params.id;
      this.jobService.JobProfile(finderId).then((JobProfile) => {
        console.log(JobProfile);
        res.render("jobPage", {
          layout: "main",
          profile: JobProfile,
          // userData: userData,
        });
      });
      
    }

}
module.exports = JobRouter;
