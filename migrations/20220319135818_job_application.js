/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("job_application", function(table){
        table.integer("job_id").notNullable().unique().unsigned();;
        table.foreign("job_id").references("job.job_id");
        table.integer("applicant_id");
        table.primary(["job_id", "applicant_id"]);
        table.foreign("applicant_id").references("applicant.applicant_id");
        table.integer("company_id");
        table.foreign("company_id").references("company.company_id");
        table.date("date_applied");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("job_application");
};
