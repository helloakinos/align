/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("job_form_response", function(table){
        table.integer("job_id").notNullable().unique().unsigned();;
        table.foreign("job_id").references("job.job_id");
        table.integer("applicant_id").notNullable().unique().unsigned();
        table.foreign("applicant_id").references("applicant.applicant_id");
        table.primary(["job_id", "applicant_id"]);
        table.string("response1");
        table.string("response2");
        table.string("response3");
        table.string("response4");
        table.string("response5");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("job_form_response");  
};
