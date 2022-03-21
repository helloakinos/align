/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("seeker_work_history", function(table){
    table.integer("seeker_id").notNullable().unique().unsigned();
    table.foreign("seeker_id").references("seeker.seeker_id")
    table.integer("work_history_id").notNullable().unique().unsigned().primary();
    table.string("work_history");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("seeker_work_history");
};
