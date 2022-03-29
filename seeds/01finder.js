/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder").del();
  await knex("finder").insert([
    {
      finder_id: 1,
      finder_name: "Microsoft",
      vetted: false,
      finder_description: "Join us as we provide technological advancement and empower those in need to empower themselves.",
      finder_size: 3,
    },
    {
      finder_id: 2,
      finder_name: "John West",
      vetted: true,
      finder_description: "I want to do a beach cleanup every Wednesday!",
      finder_size: 5,
    },
    {
      finder_id: 3,
      finder_name: "The Fred Hollows Foundation",
      vetted: true,
      finder_description: "We are an international development organisation working to end avoidable blindness.",
      finder_size: 20,
    },
    {
      finder_id: 4,
      finder_name: "HK Dog Rescue",
      vetted: true,
      finder_description: "Every dog deserves a loving home. They are our best friends, let's be a friend to them as well :) .",
      finder_size: 12,
    },
    {
      finder_id: 5,
      finder_name: "Clean Air Network",
      vetted: true,
      finder_description: "Our mission is to amplify the voices of individuals and groups to together urge the government to take appropriate measures to clean up Hong Kong's air",
      finder_size: 20,
    },
    {
      finder_id: 6,
      finder_name: "Haven of Hope Christian Service",
      vetted: true,
      finder_description: "HOHCS is a charitable organisation with over 54 service units, offering health care, elderly and rehabilitation services, respecting and inpacting life.",
      finder_size: 20,
    },
  ]);
};
