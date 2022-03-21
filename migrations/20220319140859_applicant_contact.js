/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("applicant_contact", function(table){
        table.integer("applicant_id").notNullable().unique().unsigned().primary();
        table.foreign("applicant_id").references("applicant.applicant_id");
        table.integer("mobile_number").unique().unsigned();
        table.integer("home_number").unique().unsigned();
        table.string("email1").notNullable().unique();
        table.string("email2");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("applicant_contact");
};
