class JobRouter {
  constructor(jobService, express) {
    this.jobService = jobService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get("/job", this.getFinderProfile.bind(this));
    return router;
  }

  getFinderProfile(req, res) {}
}

module.exports = JobRouter;
