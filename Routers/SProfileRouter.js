// ================ Router for  Seeker profiles ===============
const { isCurrentUser,currentUserType } = require("../authFuncs/currentUser");

class SProfileRouter {
  constructor(seekerProfileService, express) {
    this.seekerProfileService = seekerProfileService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get(
      "/seekerprofile/:id",
      isCurrentUser,
      currentUserType,
      this.getSeekerProfile.bind(this)
    );
    router.post(
      "/seekerprofile/:id",
      isCurrentUser,
      this.postCustomField.bind(this)
    );
    router.put(
      "/seekerprofile/:id",
      isCurrentUser,
      this.putProfileInfo.bind(this)
    );
    router.put(
      "/seekerprofilecustomfield/:id",
      isCurrentUser,
      this.putCustomField.bind(this)
    );
    router.delete(
      "/seekerprofile/:id",
      isCurrentUser,
      this.deleteCustom.bind(this)
    );
    return router;
  }

  getSeekerProfile(req, res) {
    let seekerId = req.params.id;
    let isCurrentUserBoolean = req.res.locals.isCurrentUserBoolean;
    this.seekerProfileService.listprofile(seekerId).then((profile) => {
      console.log(profile);
      res.render("impactSeekerProfile", {
        layout: "main",
        profile: profile,
        currentUser: isCurrentUserBoolean,
      });
    });
  }

  postCustomField(req, res) {
    let infoTitle = req.body.infoTitle;
    let infoContent = req.body.infoContent;
    let seekerId = req.rawHeaders[1];
    console.log("SeekerProfile Router: POST Method");
    console.log(`Current seeker ID: ${seekerId}`);
    console.log(
      `Info to be edited: infoTitle${infoTitle} & infoContent: ${infoContent}`
    );
    return this.seekerProfileService
      .addcustom(infoTitle, infoContent, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
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
    let seekerId = req.rawHeaders[1];
    console.log("SeekerProfile Router: PUT Method");
    console.log(`Current Finder ID: ${seekerId} and info: ${info}`);
    return this.seekerProfileService
      .updateProfile(info, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
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
    let seekerId = req.rawHeaders[1];
    console.log("SeekerProfile Router: PUT Method");
    console.log(
      `Current Seeker ID: ${seekerId} and customfieldInfo: ${customfieldInfo}`
    );
    return this.seekerProfileService
      .updateCustom(customfield_Id, customfieldInfo, seekerId)
      .then(() => {
        return this.finderProfileService.listprofile(seekerId);
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
    let seekerId = req.rawHeaders[1];
    console.log("SeekerProfile Router: DELETE Method");
    console.log(`Current seeker ID: ${seekerId}`);
    return this.seekerProfileService
      .removeCustom(customfield_Id, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}

module.exports = SProfileRouter;
