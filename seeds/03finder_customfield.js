/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder_customfield").del();
  await knex("finder_customfield").insert([
    { finder_id: 1 },
    { finder_id: 2 },
    { finder_id: 3 },
  ]);
};
