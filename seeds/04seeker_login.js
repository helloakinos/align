/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_login").del();
  await knex("seeker_login").insert([
    { username: "bella" },
    { username: "stella" },
    { username: "christine" },
    { username: "Dave" },
    { username: "Boris" },
    { username: "Yu Li" },
    { username: "Stephano" },
    { username: "Yasmine" },
    { username: "Oliver" },
    { username: "Jolene" },
    { username: "Berry" },
    { username: "Oswald" },
  ]);
};
