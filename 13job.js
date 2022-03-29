// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('job').del()
//   await knex('job').insert([
//     {
//       job_id: 1,
//       finder_id: 1,
//       job_title: "Community Manager",
//       job_description: "As a Community Manager, you will help create and manage our brand voice and image. Your duties include creating and publishing content on all media platforms, reviewing social media and other marketing metrics to build and improve campaign strategies and crafting responses to customers' feedback and messages on various platforms.",
//       location: "Vancouver",
//       vetted: false,
//       number_of_seekers: "09",
//       min_salary: 20000,
//       max_salary: 40000
//     },
//     {
//       job_id: 2,
//       finder_id: 2,
//       job_title: "Beach clean up",
//       job_description: "Pick up trash and improve marine life. Free beer afterwards" ,
//       location: "Hong Kong",
//       vetted: true,
//       number_of_seekers: 40,
//       min_salary: 200,
//       max_salary: 400
//     },{
//       job_id: 3,
//       finder_id: 3,
//       job_title: "Volunteer Optician",
//       job_description: "As a technical practitioner, you will design, fit and dispense lenses for the correction of clients' vision.",
//       location: "Hong Kong",
//       vetted: true,
//       number_of_seekers: 88,
//       min_salary: 27000,
//       max_salary: 40000
//     },
//     {
//       job_id: 4,
//       finder_id: 4,
//       job_title: "Dog walker",
//       job_description: "We are looking for a reliable dog walker to walk dogs according to times specified. Your responsibilities include safely transporting dogs to and from the centre, providing clean water and food as required, and wiping dogs' paws after every walk.",
//       location: "Wan Chai",
//       vetted: true,
//       number_of_seekers: 4,
//       min_salary: 20,
//       max_salary: 400
//     },
//     {
//       job_id: 5,
//       finder_id: 1,
//       job_title: "Senior Dog walker",
//       job_description: "We are looking for a reliable dog walker to walk dogs according to times specified. Your responsibilities include safely transporting dogs to and from the centre, providing clean water and food as required, and wiping dogs' paws after every walk. You should also be able to seek immediate veterinarian attention should any dog become sick or injured while under your care.",
//       location: "Wan Chai",
//       vetted: true,
//       number_of_seekers: 4,
//       min_salary: 30,
//       max_salary: 500
//     },
//     {
//       job_id: 6,
//       finder_id: 5,
//       job_title: "Admin Manager",
//       job_description: "We are looking for an experienced Administration Manager to supervise daily support operations of our company and plan the most efficient administrative procedures. You will lead a team of professionals to complete a range of administrative duties in different departments.",
//       location: "Tuen Mun",
//       vetted: true,
//       number_of_seekers: 12,
//       min_salary: 15000,
//       max_salary: 22000
//     },
//     {
//       job_id: 7,
//       finder_id: 6,
//       job_title: "Counsellor",
//       job_description: "As a Counsellor, you will work with patients to help them overcome and manage different mental and emotional challenges. Your duties include meeting with patients to listen to their problems, diagnosing their mental or emotional disorders.",
//       location: "Central",
//       vetted: true,
//       number_of_seekers: 32,
//       min_salary: 20000,
//       max_salary: 40000
//     },
//     {
//       job_id: 8,
//       finder_id: 6,
//       job_title: "Senior Counsellor",
//       job_description: "As a Senior Counsellor, you will work with patients to help them overcome and manage different mental and emotional challenges. Your duties include meeting with patients to listen to their problems, diagnosing their mental or emotional disorders. .In addittion, you will building treatment plans and coping strategies for the patient to follow.",
//       location: "Central",
//       vetted: true,
//       number_of_seekers: 32,
//       min_salary: 30000,
//       max_salary: 45000
//     },
//   ]);
// };
