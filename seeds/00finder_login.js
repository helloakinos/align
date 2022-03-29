/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder_login").del();
  await knex("finder_login").insert([
    { hash: "123",
      finder_name: "Microsoft",
     },
     {hash: "1223",
      finder_name: "John West",
     },
     {hash: "1233",
      finder_name: "The Fred Hollows Foundation",
     },
     {hash: "1243",
      finder_name: "HK Dog Rescue",
     },
     {hash: "1235",
      finder_name: "Clean Air Network",
     },
     {hash: "1623",
      finder_name: "Haven of Hope Christian Service",
     },
  ]);
};
