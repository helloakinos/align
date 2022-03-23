// ================ Router for  Finder profile ===================
const isLoggedInFinder = require("../authFuncs/auth.js").isLoggedInFinder;
// const express = require("express");
class FProfileRouter {
  constructor(finderProfileService, express) {
    this.finderProfileService = finderProfileService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get("/finderprofile", this.getFinderProfile.bind(this));
    router.post("/finderprofile", this.post.bind(this));
    router.put("/finderprofile/:id", this.put.bind(this));
    router.delete("/finderprofile/:id", this.delete.bind(this));
    return router;
  }

  getFinderProfile(req, res) {
    console.log(req);
    let finderId = req.rawHeaders[1];
    console.log(`Current Finder ID: ${finderId}`);
    return this.finderProfileService
      .listprofile(finderId)
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  post(req, res) {
    console.log(req);
    let infoTitle = req.body.infoTitle;
    let infoContent = req.body.infoContent;
    let finderId = req.rawHeaders[1];
    console.log("FProfile Router: POST Method");
    console.log(`Current Finder ID: ${finderId}`);
    console.log(
      `Info to be edited: infoTitle${infoTitle} & infoContent: ${infoContent}`
    );
    return this.finderProfileService
      .addcustom(infoTitle, infoContent, finderId)
      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  put(req, res) {
    let info = req.body.info;
    let finderId = req.auth.finder.finderId;
    console.log("FProfile Router: PUT Method");
    console.log(`Current Finder ID: ${finderId}`);
  }
  delete(req, res) {
    console.log("FProfile Router: DELETE Method");
    console.log(`Current Finder ID: ${finderId}`);
  }
}

module.exports = FProfileRouter;
