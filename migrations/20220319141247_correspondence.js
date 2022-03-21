/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("correspondence", function(table){
        table.increments("message_id").primary();
        table.integer("applicant_id").notNullable().unsigned();
        table.foreign("applicant_id").references("applicant.applicant_id");
        table.date("date_sent");
        table.time("time_sent");
        table.integer("company_id");
        table.foreign("company_id").references("company.company_id");
        table.string("message_content");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("correspondence");
};
