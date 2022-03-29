class JobService {
  constructor(knex) {
    this.knex = knex;
  }

  async JobProfile(finderId) {
  //   console.log(`jobPreviewService's job profile method was called`);
  //   try {
  //     let JobProfile = await this.knex
  //       .select("finder_id", "finder_name")
  //       .from("finder");
  //     return JobProfile;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  let profile = [];
    if (typeof finderId !== "undefined") {
      try {
        let finderInfo = await this.knex
          .select("*")
          .from("finder")
          .fullOuterJoin(
            "finder_contact",
            "finder.finder_id",
            "finder_contact.finder_id",
            "finder_name"
          )
          .where("finder.finder_id", finderId);
        profile.push(finderInfo[0]);
        if (finderInfo.length == 1) {
          let finderCustom = await this.knex
            .select("*")
            .from("finder_customfield")
            .where("finder_customfield.finder_id", finderId);
          profile.push(finderCustom);
          let finderJob = await this.knex
            .select("job_title")
            .from("job")
            .where("job.finder_id", finderId);
          profile.push(finderJob);
          return profile;
        } else {
          console.log("Empty FinderProfile");
        }
      } catch (error) {
        console.log("error reading profile from database: " + error);
      }
    }
}
}

module.exports = JobService;
