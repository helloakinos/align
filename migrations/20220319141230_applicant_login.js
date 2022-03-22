/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("seeker_login", function(table){
        table.integer("seeker_id").notNullable().unique().unsigned().primary();
        table.foreign("seeker_id").references("seeker.seeker_id");
        table.string("username").unique();
        table.string("access_token");
        table.integer("session_id");
        table.string("email").notNullable().unique();
        table.string("password");
        table.string("facebook_id").unique();
        table.string("gmail_id").unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("seeker_login");
};
