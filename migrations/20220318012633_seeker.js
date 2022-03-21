/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("seeker", function(table){
      table.increments('seeker_id').notNullable().unique().primary();
      table.string("first_name").notNullable();
      table.string("surname").notNullable();
      table.string("current_company").notNullable();
      table.date("date_joined");
      table.string("gender");
      table.integer("cv_id").unique();
      table.string("favourite_companies");
      table.string("favourite_jobs");
      table.string("current_location");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("seeker");
};