// ================ Router for  job postings ===================

class JobRouter {
  constructor(jobService, express) {
    this.jobService = jobService;
    this.express = express;
  }
}

module.exports = JobRouter;
