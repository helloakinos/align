/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder_customfield").del();
  await knex("finder_customfield").insert([
    {
      customfield_id: 1,
      finder_id: 1,
      customfield_title: "Overview",
      customfield_content: "At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Microsoft operates in 190 countries and is made up of 181,000 passionate employees worldwide.",
    },
    {
      customfield_id: 2,
      finder_id: 1,
      customfield_title: "Specialties",
      customfield_content: "Business Software, Developer Tools, Home & Educational Software, Tablets, Search, Advertising, Servers, Windows Operating System, Windows Applications & Platforms, Smartphones, Cloud Computing, Quantum Computing, Future of Work, Productivity, AI, Artificial Intelligence, Machine Learning, Laptops, Mixed Reality, Virtual Reality, Gaming, Developers, and IT Professional",
    },
    {
      customfield_id: 3,
      finder_id: 2,
      customfield_title: "Past Clean-up experience",
      customfield_content: "I have partnered with various organizations, offering corporate bodies the opportunity to make an impact and equally increase team cohesion",
    },
    {
      customfield_id: 4,
      finder_id: 3,
      customfield_title: "Our Values",
      customfield_content: "Our values are integral to the way we work to deliver our vision.  They represent not only our approach to how we work with our partners but how we work with each other",
    },
    {
      customfield_id: 5,
      finder_id: 3,
      customfield_title: "Employee Testimonial - Jaki Adams",
      customfield_content: "The Foundation's human rights based approach and unwavering support in addressing inequality in health, through an eye health lens, inspires me every day. I accept the challenge to do my bit to ensure Aboriginal and Torres Strait Islander people, my mob, are informed and treated with respect and dignity, whilst being afforded the same right to health as other Australians",
    },
    {
      customfield_id: 6,
      finder_id: 3,
      customfield_title: "Employee Testimonial - Meng Sokkheang",
      customfield_content: "The Foundation is an international organisation that hires local staff and values their contribution. I am able to have an impact because I am supported and encouraged to achieve our objectives by my team, manager and colleagues. Being a national staff member in Cambodia, I witness the smiles of people in our community who have had their sight restored or improved by the work of The Foundation, and that makes me so proud.",
    },
    {
      customfield_id: 7,
      finder_id: 3,
      customfield_title: "Headquarters",
      customfield_content: "Rosebery, New South Wales",
    },
    {
      customfield_id: 8,
      finder_id: 4,
      customfield_title: "About HKDR",
      customfield_content: "HKDR was founded in 2003 for the specific purpose of saving dogs and puppies from the Hong Kong Government’s Agriculture, Fisheries and Conservation Department (AFCD) Animal Management Centres.  The organisation has cared for and re-homed more than 10,000 dogs while being largely funded by private donations, sales of HKDR merchandises and fundraising events. HKDR is proud to be a No Kill Organisation, meaning that no dog under its care will be euthanised for any reason other than when it is the only humane option",
    },
    {
      customfield_id: 9,
      finder_id: 4,
      customfield_title: "Exemption from holding an animal trader licence",
      customfield_content: "Exemption number: ORG-00001",
    },
    {
      customfield_id: 10,
      finder_id: 4,
      customfield_title: "Dedication",
      customfield_content: "HKDR is funded almost entirely by private donations, with the addition of one-off grants, event sponsorship, merchandise sales and fundraising events, with free desexing provided by AFCD for all dogs and puppies taken from their Animal Management Centres and an annual Subvention (amount varies).",
    },
    {
      customfield_id: 11,
      finder_id: 5,
      customfield_title: "History",
      customfield_content: "CAN was established in July 2009, following a Civic Exchange conference focused on Hong Kong's air pollution situation in January of the same year. The Civic Exchange held a conference titled 'The Air We Breathe - A Public Health Dialogue', during which the idea of an organisation exclusively focused on air pollution aimed toward creating change at the highest level of government sparked",
    },
    {
      customfield_id: 12,
      finder_id: 5,
      customfield_title: "Objectives",
      customfield_content: "Clean Air Network envisions to clean up Hong Kong's air until it meets World Health Organization's recommended safe level in order to protect public health. CAN's mission is to amplify voices of individuals, groups and organisations, and together urge the government to take appropriate measures to clean up Hong Kong's air immediately. In 2017, CAN focused primarily to tackle local roadside air pollution, while regularly monitor the progress to reduce emission from marine vessels, power plants and regional sources.",
    },
    {
      customfield_id: 13,
      finder_id: 5,
      customfield_title: "Education",
      customfield_content: "During the first half of 2011, CAN wrote six bilingual educational modules about air pollution for secondary school students and teachers to assist in the teaching of Hong Kong secondary school's Liberal Studies requirement. The materials were made available to the public through Ming Pao's Liberal Studies portal. Letters were sent to all schools in Hong Kong informing teachers and principals about the availability of the materials. CAN also routinely holds student air quality monitoring programs in conjunction with schools in the Hong Kong area. This program has been done with approximately 20 schools, including the Diocesan Boys' School and Lingnan Secondary School.",
    },
    {
      customfield_id: 14,
      finder_id: 6,
      customfield_title: "About Haven of Hope Christian Service ",
      customfield_content: "In the 1950s, witnessing the desperate plight of the refugees in Tiu Keng Leng, Sister Annie Skau, the founder of Haven of Hope Christian Service (HOHCS) helped unite their knots in lives by means of medical assistance. Not merely did Sister Annie care about their health, she endeavored to meet their psychological, social and spiritual needs. Inheriting Sister Annie Skau’s spirit of “Respecting Life. Impacting Life”, HOHCS keeps up with the times to proactively develop diversified services covering four areas of service, which include elderly services, health care services, rehabilitation services and education services. Also, HOHCS caters to the social needs, cares and serves the underprivileged groups with innovative thinking, in addition to addressing the entire need of a person for the service users.",
    },
    {
      customfield_id: 15,
      finder_id: 6,
      customfield_title: "Company size",
      customfield_content: "1,001-5,000 employees",
    },
    {
      customfield_id: 16,
      finder_id: 6,
      customfield_title: "Founded",
      customfield_content: "1953",
    },
  ]);
};
