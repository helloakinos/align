// ================ Router for  job postings ===================
const isLoggedIn = require("../authFuncs/auth.js").isLoggedIn;

class FProfileRouter {
  constructor(finderService, express) {
    this.finderService = finderService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get(
      "/myfinderprofile",
      /*isLoggedIn,*/ this.getFinderProfile.bind(this)
    );
    router.post("/", this.post.bind(this));
    router.put("/:id", this.put.bind(this));
    router.delete("/:id", this.delete.bind(this));
    return router;
  }

  getFinderProfile(req, res) {
    let finderId = req.auth.user.finderId;
    console.log(`Current Finder ID: ${finderId}`);
    return this.finderService.profile(finderId).then((profile) => {
      res.json(profile);
    });

    res.render("finderProfile");
  }
}

module.exports = FProfileRouter;
