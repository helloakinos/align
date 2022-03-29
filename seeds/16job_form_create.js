/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('job_form_create').del()
  await knex('job_form_create').insert([
    {
      seeker_id: 1,
      job_id: 1,
      question1: "How many times per day do a clock's hands overlap?",
      question1: "What qualities make a good leader?",
      question3: "Which is more important, creativity or efficiency?"
    },
    {
      seeker_id: 2,
      job_id: 2,
      question1: "Are you willing to travel?",
      question2: "Would you be willing to work nights and weekends?"
    },
    {
      seeker_id: 3,
      job_id: 3,
      question1: "If you won a $10 million lottery, would you still work?",
      question2: "What's the last book you read?",
      question3: "Do you ever take your work home with you?"
    },
    {
      seeker_id: 4,
      job_id: 4,
      question1: "What are three skills or traits you wish you had?",
      question2: "How would a good friend describe you?"
    },
    {
      seeker_id: 5,
      job_id: 5,
      question1: "Do you think you could have done better in your last job?",
      question2: "What is your ideal working environment?"
    },
    {
      seeker_id: 6,
      job_id: 6,
      question1: "What do you want to accomplish in the first 30 days of this job?",
      question2: "Describe a time when you disagreed with your boss.",
      question3: "What is your ideal company size?"
    },
    {
      seeker_id: 7,
      job_id: 7,
      question1: "Describe a time when your boss was wrong. How did you handle the situation?",
      question2: "How would you feel about reporting to a person younger than you?"
    },
    {
      seeker_id: 8,
      job_id: 8,
      question1: "What is your greatest personal achievement?",
      question2: "Where do you see yourself in 10 years?"
    },
  ]);
};