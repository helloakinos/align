/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("company_login", function(table){
        table.integer("company_id").primary();
        table.foreign("company_id").references("company.company_id");
        table.string("password");
        table.string("company_name").unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("company_login");
};
