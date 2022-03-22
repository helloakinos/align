// ================ Router for  Finder profile ===================
const isLoggedInFinder = require("../authFuncs/auth.js").isLoggedInFinder;
// const express = require("express");
class FProfileRouter {
  constructor(finderService, express) {
    this.finderService = finderService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get("/finderprofile", this.getFinderProfile.bind(this));
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
      res.render("finderProfile");
    });
  }
  post(req, res) {
    console.log("FProfile Router: POST Method");
  }
  put(req, res) {
    console.log("FProfile Router: PUT Method");
  }
  delete(req, res) {
    console.log("FProfile Router: DELETE Method");
  }
}

module.exports = FProfileRouter;
