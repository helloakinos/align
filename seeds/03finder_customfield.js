/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder_customfield").del();
  await knex("finder_customfield").insert([
    {
      finder_id: 1,
      customfield_title: "Customfield Yala",
      customfield_content:
        "this is a custom field filled with dummy text, enjoy",
    },
    {
      finder_id: 1,
      customfield_title: "Yala",
      customfield_content:
        "this is a custom field filled with dummy text, enjoy",
    },
    {
      finder_id: 3,
      customfield_title: "Customfield Bouya",
      customfield_content:
        "Another crazy custom field filled with dummy text, enjoy",
    },
  ]);
};
