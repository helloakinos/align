class JobService {
  constructor(knex) {
    this.knex = knex;
  }

  async JobProfile(jobId) {
    let fulljob = [];
    if (typeof jobId !== "undefined") {
      try {
        let jobInfo = await this.knex
          .select("*")
          .from("job")
          .fullOuterJoin("finder", "job.finder_id", "finder.finder_id")
          .where("job.job_id", jobId);

        fulljob.push(jobInfo);
        console.log(jobInfo);
        if (jobInfo.length == 1) {
          let jobContact = await this.knex
            .select("*")
            .from("finder_contact")
            .where("finder_contact.finder_id", jobInfo[0].finder_id);
          fulljob.push(jobContact);
          // let jobCustom = await this.knex
          //   .select("*")
          //   .from("finder_customfield")
          //   .where("finder_customfield", jobInfo[0].finder_id);
          // fulljob.push(jobCustom);
          // console.log(jobCustom);
          return fulljob;
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
