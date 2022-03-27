// ================ Router for  Finder profile ===================
const isLoggedInFinder = require("../authFuncs/auth.js").isLoggedInFinder;

class FProfileRouter {
  constructor(finderProfileService, express) {
    this.finderProfileService = finderProfileService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    // router.get("/finderprofile", this.getFinderProfile.bind(this));
    router.post("/finderprofile", this.postCustomField.bind(this)); // needs authentication to even access the edit form
    router.put("/finderprofile", this.putProfileInfo.bind(this)); // needs authentication to even access the edit form
    router.put("/finderprofile/:id", this.putCustomField.bind(this));
    router.delete("/finderprofile/:id", this.deleteCustom.bind(this));
    return router;
  }

  // getFinderProfile(req, res) {
  //   let finderId = req.rawHeaders[1];
  //   console.log(`Current Finder ID: ${finderId}`);
  //   return this.finderProfileService
  //     .listprofile(finderId)
  //     .then((profile) => {
  //       res.json(profile);
  //     })
  //     .catch((error) => {
  //       res.status(500).json(error);
  //     });
  // }

  postCustomField(req, res) {
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

  putProfileInfo(req, res) {
    let info = req.body.info;
    let finderId = req.rawHeaders[1];
    console.log("FProfile Router: PUT Method");
    console.log(`Current Finder ID: ${finderId} and info: ${info}`);
    return this.finderProfileService
      .updateProfile(info, finderId)
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

  putCustomField(req, res) {
    let customfield_Id = req.params.id;
    let customfieldInfo = req.body.customfieldInfo;
    let finderId = req.rawHeaders[1];
    console.log("FProfile Router: PUT Method");
    console.log(
      `Current Finder ID: ${finderId} and customfieldInfo: ${customfieldInfo}`
    );
    return this.finderProfileService
      .updateCustom(customfield_Id, customfieldInfo, finderId)
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

  deleteCustom(req, res) {
    let customfield_Id = req.params.id;
    let finderId = req.rawHeaders[1];
    console.log("FProfile Router: DELETE Method");
    console.log(`Current Finder ID: ${finderId}`);
    return this.finderProfileService
      .removeCustom(customfield_Id, finderId)
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
}

module.exports = FProfileRouter;
