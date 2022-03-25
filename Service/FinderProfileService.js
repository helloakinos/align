// ================ Setting up and editting Finder Profile ==================

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
    let profile = [];
    console.log(info);
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
        let profileInfo = await this.knex("finder")
          .where("finder.finder_id", finderId)
          .update({
            finder_name: info.finder_name,
            finder_description: info.finder_description,
            finder_size: info.finder_size,
          });
        let profileContact = await this.knex("finder_contact")
          .where("finder_contact.finder_id", finderId)
          .update({
            first_name: info.first_name,
            surname: info.surname,
            telephone_number: info.telephone_number,
            mobile_number: info.mobile_number,
            email: info.email,
            role: info.role,
          });
        return profile;
      } else {
        console.log(`Error: unable to find the correct profile`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateCustom(customfield_Id, customfieldInfo, finderId) {
    console.log(
      `updateCustom method called with customfieldId: ${customfield_Id} with finderId: ${finderId}`
    );
    console.log(customfieldInfo);
    try {
      let customfields = await this.knex
        .select("*")
        .from("finder_customfield")
        .where({
          finder_id: finderId,
          customfield_id: customfield_Id,
        });
      if (customfields.length === 1) {
        return await this.knex("finder_customfield")
          .where({
            finder_id: finderId,
            customfield_id: customfield_Id,
          })
          .update({
            customfield_title: customfieldInfo.customfield_Title,
            customfield_content: customfieldInfo.customfield_Content,
          });
      } else {
        console.log(`Error: unable to update customfield`);
      }
    } catch (error) {
      console.log(`there is an error: ${error}`);
    }
  }

  async removeCustom(customfield_Id, finderId) {
    console.log(
      `removeCustom method called with customfield_id: ${customfield_Id} and finderId: ${finderId}`
    );
    try {
      let customfield = await this.knex
        .select("*")
        .from("finder_customfield")
        .where({
          finder_id: finderId,
          customfield_id: customfield_Id,
        });
      if (customfield.length === 1) {
        return await this.knex("finder_customfield")
          .where({
            finder_id: finderId,
            customfield_id: customfield_Id,
          })
          .del();
      } else {
        console.log(`error in selecting the correct customfield`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FinderProfileService;
