/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_education").del();
  await knex("seeker_education").insert([
    {
      seeker_id: 1,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "AWS developer",
    },
    {
      seeker_id: 2,
      university_degree: false,
      highschool_degree: true,
      other_certifications: "Project Management Professional (PMP), Certified Business Analysis Professional (CBAP)",
    },
    {
      seeker_id: 3,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    },
    {
      seeker_id: 4,
      university_degree: false,
      highschool_degree: true,
      other_certifications: "Microsoft Certified: Azure Developer Associate",
    },
    {
      seeker_id: 5,
      university_degree: false,
      highschool_degree: false,
      other_certifications: "Certified in Production and Inventory Management (CPIM), Certified Supply Chain Professional (CSCP), Certified in Logistics, Transportation and Distribution (CLTD) ",
    },
    {
      seeker_id: 6,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "SHRM-CP, SHRM-SCP",
    },
    {
      seeker_id: 7,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Professional in Human Resources (PHR), Senior Professional in Human Resources (SPHR)",
    },
    {
      seeker_id: 8,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "CPA, CFA",
    },
    {
      seeker_id: 9,
      university_degree: false,
      highschool_degree: true,
      other_certifications: "Cisco Certified Internetwork Expert (CCIE), Cisco Certified Network Professional (CCNP)",
    },
    {
      seeker_id: 10,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "IBM Cybersecurity Analyst Professional Certificate",
    },
    {
      seeker_id: 11,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Meta Social Media Marketing Professional Certificate",
    },
    {
      seeker_id: 12,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Salesforce Sales Development Representative Professional Certificate",
    },
  ]);
};
