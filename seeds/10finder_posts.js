// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('finder_posts').del()
//   await knex('finder_posts').insert([
//     {
//       post_id: 1,
//       post_content: "We're proud to announce that #Microsoft has expanded its presence in the Middle East, securing a license to operate in Dubai, UAE. Read this for more details👇 www.microsoft.com",
//       finder_id: 1,
//       likes: 20,
//       dislikes: 2,
//       comments: "about time!"
//     },
//     {
//       post_id: 2,
//       post_content: "#Microsoft CMO & Co-Founder Bill Gates joined our affiliates for a #MicrosoftBlockchainWeek pre-event gathering in #Dubai. It's a pleasure to host this exclusive event for all of our affiliates to show our gratitude for supporting Microsoft!",
//       finder_id: 1,
//       likes: 200,
//       dislikes: 4,
//       comments: "Welcome to Dubai!"
//     },
//     {
//       post_id: 3,
//       post_content: "We have bought all the materials we need for Big Wave Beach tomorrow, who's excited?!?",
//       finder_id: 2,
//       likes: 10,
//       dislikes: 3,
//       comments: "Sorry, I can't make it anymore. Hope to catch the next one."
//     },
//     {
//       post_id: 4,
//       post_content: "Here's a link to Daniel's story of hope despite visual impairment. Let's learn to act before it's too late https://www.lenstore.co.uk/eyecare/vision-without-sight-three-tales-inspiring-blind-people",
//       finder_id: 3,
//       likes: 60,
//       dislikes: 1,
//       comments: "OMG!"
//     },
//     {
//       post_id: 5,
//       post_content: "Meet Wiley, a pomerenian in need of a new home, any takers???",
//       finder_id: 4,
//       likes: 25,
//       dislikes: 2,
//       comments: "@Mike Williams can we keep him?"
//     },
//     {
//       post_id: 6,
//       post_content: "8-year old Adrienne loves everyone she meets. It‘s very cute to see her short and chubby tail wagging non-stop when she greets you. She was very thin when she came to HKDR but with good food she’s quickly gaining weight and strength. Despite her big size she’s very easy on the leash in general, and while she can sometimes react to other dogs on walks she can easily be distracted as she’s very food motivated. Please give this adorable girl a forever home! Please complete the Adoption Questionnaire as first step if you are interested in adopting Adrienne: https://hongkongdogrescue.com/adopt/adoption-questionnaire/",
//       finder_id: 4,
//       likes: 2,
//       dislikes: 6,
//       comments: "Hope she finds a home"
//     },
//     {
//       post_id: 7,
//       post_content: "Plum is one of the shy dogs, and we've just received this very happy update from her foster home. This is why we love foster homes, because it gives dogs like Plum a real chance to shine.",
//       finder_id: 4,
//       likes: 255,
//       dislikes: 3,
//       comments: "Shine bright like a diamond Plum!"
//     },
//     {
//       post_id: 8,
//       post_content: "How are you working towards clena air today?",
//       finder_id: 5,
//       likes: 20,
//       dislikes: 2,
//       comments: "buying new air filters :)"
//     },
//     {
//       post_id: 8,
//       post_content: "We would love to hear from you, how can we make the world a better place?",
//       finder_id: 6,
//       likes: 20,
//       dislikes: 2,
//       comments: "You're doing a great job aleady!"
//     },
//   ]);
// };
