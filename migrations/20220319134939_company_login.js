/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("finder_login", function(table){
        table.integer("finder_id").primary();
        table.foreign("finder_id").references("finder.finder_id");
        table.string("password");
        table.string("finder_name").unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("finder_login");
};
