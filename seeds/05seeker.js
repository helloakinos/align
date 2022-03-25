/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker").del();
  await knex("seeker").insert([
    {
      seeker_id: 1,
      first_name: "Claire",
      surname: "Align",
      current_company: "Xccelerate",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 2,
      first_name: "Akin",
      surname: "Align",
      current_company: "Xccelerate",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 3,
      first_name: "Vinny",
      surname: "Align",
      current_company: "Xccelerate",
      gender: "Prefer not to say",
    },
  ]);
};
