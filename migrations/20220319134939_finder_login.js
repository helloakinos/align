/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("finder_login", function(table){
        table.increments("finder_login_id").primary();
        table.integer("finder_id")
        table.foreign("finder_id").references("finder.finder_id");
        table.string("hash");
        table.string("finder_name").unique();
        table.integer("id");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("finder_login");
};
