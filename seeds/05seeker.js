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
      first_name: "Alex",
      surname: "Stephany",
      current_company: "Beam",
      gender: "Female",
    },
    {
      seeker_id: 2,
      first_name: "Chetna Gala",
      surname: "Sinha",
      current_company: "Ex-banker",
      gender: "Female",
    },
    {
      seeker_id: 3,
      first_name: "Greg",
      surname: "Asner",
      current_company: "Center for Global Discovery and Conservation Service",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 4,
      first_name: "Isabella",
      surname: "Tree",
      current_company: "Forestry Industry",
      gender: "Female",
    },
    {
      seeker_id: 5,
      first_name: "Ali",
      surname: "Parsa",
      current_company: "Babylon",
      gender: "Male",
    },
    {
      seeker_id: 6,
      first_name: "Xiao Yun",
      surname: "Chen",
      current_company: "Bloomberg",
      gender: "Female",
    },
    {
      seeker_id: 7,
      first_name: "Noam",
      surname: "Chomsky",
      current_company: "Self-employed",
      gender: "Male",
    },
    {
      seeker_id: 8,
      first_name: "Elif",
      surname: "Shafak",
      current_company: "Self-employed - novelist",
      gender: "Female",
    },
    {
      seeker_id: 9,
      first_name: "Steve",
      surname: "Evans",
      current_company: "Solpassion Music Ltd",
      gender: "Male",
    },
    {
      seeker_id: 10,
      first_name: "James",
      surname: "Parr",
      current_company: "Trillium Technologies",
      gender: "Male",
    },
    {
      seeker_id: 11,
      first_name: "Kristen",
      surname: "Davis",
      current_company: "APOPO",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 12,
      first_name: "Anil",
      surname: "Seth",
      current_company: "Apple",
      gender: "Male",
    },
  ]);
};
