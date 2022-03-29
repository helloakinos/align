/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_customfield").del();
  await knex("seeker_customfield").insert([
    {
      seeker_id: 1,
      customfield_title: "Personal Project",
      customfield_content: "Developed a # application to parse data from bloomberg",
    },
    {
      seeker_id: 1,
      customfield_title: "Education Achievements",
      customfield_content: "Straight A student since high school",
    },
    {
      seeker_id: 2,
      customfield_title: "Campaigns lead",
      customfield_content: "I spearheaded an initiative to provide improved kitty litter which is more eco-friendly",
    },
    {
      seeker_id: 3,
      customfield_title: "Sports Achievements",
      customfield_content: "National MMA championship 2022: Gold Medal",
    },
    {
      seeker_id: 3,
      customfield_title: "Personal Project",
      customfield_content: "In high school, I collaborated with a group of friends and cleaned all air filters in the school.",
    },
    {
      seeker_id: 4,
      customfield_title: "Hobbies",
      customfield_content: "Walking my dogs, hiking",
    },
    {
      seeker_id: 4,
      customfield_title: "Extra-curricular Activities",
      customfield_content: "Dance society member, National Flag raising club member",
    },
    {
      seeker_id: 5,
      customfield_title: "Sports Achievement",
      customfield_content: "FIBA championship 2012: Silver Medal",
    },
    {
      seeker_id: 5,
      customfield_title: "Personal Project",
      customfield_content: "Started the group 'surfers against sewage', gathering like minded individuals to combat sewage waste contaminating the ocean",
    },
    {
      seeker_id: 6,
      customfield_title: "Hobbies",
      customfield_content: "Surfing, Swimming, Water Polo",
    },
    {
      seeker_id: 6,
      customfield_title: "Campaigns lead",
      customfield_content: "Spearheaded beach cleaning initiatives in 3 countries so far, Brasil, Venezuela and Peru",
    },
    {
      seeker_id: 7,
      customfield_title: "Sports Achievements",
      customfield_content: "E-Sports championship 2003: First place",
    },
    {
      seeker_id: 8,
      customfield_title: "Personal Project",
      customfield_content: "Raised awareness for injured squirrels and other small critters which suffer due to the way our roads are set up",
    },
    {
      seeker_id: 8,
      customfield_title: "hard Skills",
      customfield_content: "Microsoft word wizzard, Spreadsheet genius",
    },
    {
      seeker_id: 9,
      customfield_title: "Soft Skills",
      customfield_content: "Active listening, multi-cultural understanding",
    },
    {
      seeker_id: 10,
      customfield_title: "Sports Achievements",
      customfield_content: "Regional Archery Championship Asia 1999: Gold Medal",
    },
    {
      seeker_id: 11,
      customfield_title: "Achievements",
      customfield_content: "Gold medal math olympiad, solved a rubik's cube blindfolded in under 30 seconds",
    },
    {
      seeker_id: 12,
      customfield_title: "Extra-curricular Activities",
      customfield_content: "Ballet club, Band practice",
    },
    {
      seeker_id: 12,
      customfield_title: "Causes I care about",
      customfield_content: "Education, poverty and inequality",
    },
    {
      seeker_id: 12,
      customfield_title: "Sports Achievements",
      customfield_content: "National Table Tennis championship 1998: Gold Medal",
    },
  ]);
};
