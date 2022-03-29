// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex("job_application").del()
//   await knex("job_application").insert([
//     {
      
//       seeker_id: 2,
//       finder_id: 1,
//     },
//     {
      
//       seeker_id: 12,
//       finder_id: 1,
//     },
//     {
      
//       seeker_id: 1,
//       finder_id: 2,
//     },
//     {
      
//       seeker_id: 3,
//       finder_id: 2,
//     },
//     {
      
//       seeker_id: 4,
//       finder_id: 3,
//     },
//     {
      
//       seeker_id: 5,
//       finder_id: 4,
//     },
//     {
      
//       seeker_id: 6,
//       finder_id: 4,
//     },
//     {
      
//       seeker_id: 7,
//       finder_id: 5,
//     },
//     {
//       job_id: 8,
//       seeker_id: 8,
//       finder_id: 6,
//     },
//     {
//       job_id: 8,
//       seeker_id: 9,
//       finder_id: 6,
//     },
//     {
//       job_id: 8,
//       seeker_id: 10,
//       finder_id: 6,
//     },
//     {
//       job_id: 8,
//       seeker_id: 11,
//       finder_id: 6,
//     },
//   ]);
// };
