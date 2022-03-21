/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("job", function(table){
        table.increments("job_id").notNullable().unique().primary();
        table.integer("company_id").primary();
        table.foreign("company_id").references("company.company_id");
        table.string("job_title");
        table.string("location");
        table.boolean("vetted");
        table.integer("number_of_applicants");
        table.integer("min_salary");
        table.integer("max_salary");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("job");
};
