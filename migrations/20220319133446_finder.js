/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("finder", function(table){
        table.increments("company_id").notNullable().unique().unsigned().primary();
        table.string("company_name").unique();
        table.boolean("vetted");
        table.string("company_description");
        table.integer("company_size");
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("finder");
};
