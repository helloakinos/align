/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_login").del();
  await knex("seeker_login").insert([
    { seeker_name: "Travis" },
    { seeker_name: "Stella" },
    { seeker_name: "Christine" },
    { seeker_name: "Dave" },
    { seeker_name: "Ivan" },
    { seeker_name: "Chris" },
    { seeker_name: "Stephano" },
    { seeker_name: "Yasmine" },
    { seeker_name: "Oliver" },
    { seeker_name: "Jolene" },
    { seeker_name: "Berry" },
    { seeker_name: "Oswald" },
  ]);
};
