/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("job").del();
    await knex("job").insert([
      {
        job_id:1,
        finder_id: 1,
        job_title:"Holy",
        location:"HK"
      },
      {
        job_id:2,
        finder_id: 2,
        job_title:"Moly",
        location:"HK"
      },
      {
        job_id:3,
        finder_id: 3,
        job_title:"Coly",
        location:"HK"
      }
    ]);
  };
  