/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder_contact").del();
  await knex("finder_contact").insert([
    {
      finder_id: "1",
      first_name: "Blair",
      surname: "Chu",
      telephone_number: 12345678,
      mobile_number: 23456789,
      email: "blaireC@microsoft.com",
      preferred_contact: "Blaire",
      role: "Talent Acquisition Lead",
    },
    {
      finder_id: "2",
      first_name: "John",
      surname: "West",
      telephone_number: 32345631,
      mobile_number: 33456783,
      email: "J.West@hotmail.com",
      preferred_contact: "John",
      role: "Organizer",
    },
    {
      finder_id: "3",
      first_name: "Ian",
      surname: "Wishart",
      telephone_number: 42345672,
      mobile_number: 34567891,
      email: "I.Wishart@tfhf.com",
      preferred_contact: "Ian",
      role: "CEO",
    },
    {
      finder_id: "4",
      first_name: "Mei Ki",
      surname: "Chan",
      telephone_number: 98765432,
      mobile_number: 65432198,
      email: "info@hongkongdogrescue.com",
      preferred_contact: "Sally",
      role: "Outreach Director",
    },
    {
      finder_id: "5",
      first_name: "Mui",
      surname: "Kinoshita",
      telephone_number: 54321321,
      mobile_number: 65432121,
      email: "Mui@cleanairnetwork.com",
      preferred_contact: "Mui",
      role: "Co-founder",
    },
    {
      finder_id: "6",
      first_name: "Leo",
      surname: "Fong",
      telephone_number: 92387447,
      mobile_number: 33337744,
      email: "L.Fong@hohcs.com",
      preferred_contact: "Leo",
      role: "HR Officer",
    },
  ]);
};
