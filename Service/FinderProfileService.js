// ================ posting and editting jobs ==================

class FinderProfileService {
  constructor(knex) {
    this.knex = knex;
  }

  async listprofile(finderId) {
    console.log(`listprofile method called with finderId: ${finderId}`);
    let profile = [];
    if (typeof finderId !== "undefined") {
      try {
        let finderInfo = await this.knex
          .select("*")
          .from("finder")
          .fullOuterJoin(
            "finder_contact",
            "finder.finder_id",
            "finder_contact.finder_id"
          )
          .where("finder.finder_id", finderId);
        profile.push(finderInfo[0]);
        if (finderInfo.length === 1) {
          let finderCustom = await this.knex
            .select("*")
            .from("finder_customfield")
            .where("finder_customfield.finder_id", finderId);
          profile.push(finderCustom);
          return profile;
        } else {
          console.log("Unknown Finder");
        }
      } catch (error) {
        console.log("error reading profile from database: " + error);
      }
    }
  }
  // we add the option of adding 2 custom fields into your finderprofile
  async addcustom(infoTitle, infoContent, finderId) {
    console.log(
      `add method called with infoTitle: ${infoTitle}, infoContent: ${infoContent} and finderId: ${finderId}`
    );
    try {
      await this.knex
        .select("*")
        .from("finder_customfield")
        .where("finder_customfield.finder_id", finderId)
        .insert({
          finder_id: finderId,
          customfield_title: infoTitle,
          customfield_content: infoContent,
        })
        .into("finder_customfield");
    } catch (error) {
      console.log(error);
    }
  }

  async updateProfile(info, finderId) {
    console.log(
      `updateProfile method called with info: ${info} and finderId: ${finderId}`
    );
    try {
      let profile = await this.knex
        .select("*")
        .from("finder")
        .fullOuterJoin(
          "finder_contact",
          "finder.finder_id",
          "finder_contact.finder_id"
        )
        .where("finder.finder_id", finderId);
      if (profile.length === 1) {
        return this.knex("finder")
          .where("finder.finder_id", finderId)
          .update(info);
      } else {
        console.log(`Error: unable to find the correct profile`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FinderProfileService;
