// ================ Router for  Seeker profiles ===============
const { isCurrentUser, currentUserType } = require("../authFuncs/currentUser");
const { isGuest } = require("../authFuncs/auth");

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
      isGuest,
      this.getSeekerProfile.bind(this)
    );
    router.post("/api/newseekerprofile", this.postSeekerProfileInfo.bind(this));

    router.post(
      "/api/newseekercustomfield",
      isGuest,
      isCurrentUser,
      this.postCustomField.bind(this)
    );
    router.put(
      "/api/seekerprofile",
      isGuest,
      isCurrentUser,
      this.putProfileInfo.bind(this)
    );
    router.put(
      "/seekerprofilecustomfield/:id",
      isGuest,
      isCurrentUser,
      this.putCustomField.bind(this)
    );
    router.delete(
      "/seekerprofile/:id",
      isGuest,
      isCurrentUser,
      this.deleteCustom.bind(this)
    );
    return router;
  }

  getSeekerProfile(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    let seekerId = req.params.id;
    let isCurrentUserBoolean = req.res.locals.isCurrentUserBoolean;
    console.log(`GetSeekerProfile Method in SProfileRouter`);
    this.seekerProfileService.listprofile(seekerId).then((profile) => {
      res.render("impactSeekerProfile", {
        layout: "main",
        profile: profile,
        currentUser: isCurrentUserBoolean,
        userData: userData,
      });
    });
  }

  postSeekerProfileInfo(req, res) {
    let profileInfo = req.body.seekerProfileInfo;
    let seekerId = req.user.seeker_id;
    return this.seekerProfileService
      .addProfile(profileInfo, seekerId)
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
    let seekerInfo = req.body.seekerProfileInfo;
    let seekerId = req.user.seeker_id;
    console.log("SeekerProfile Router: PUT Method");
    console.log(`Current Seeker ID: ${seekerId} and info: ${seekerInfo}`);
    return this.seekerProfileService
      .updateProfile(seekerInfo, seekerId)
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
        return this.seekerProfileService.listprofile(seekerId);
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
