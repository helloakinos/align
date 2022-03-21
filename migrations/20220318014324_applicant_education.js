/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("seeker_education", function(table){
        table.integer("seeker_id").notNullable().unique().unsigned();
        table.foreign("seeker_id").references("seeker.seeker_id");
        table.integer("seeker_education_id").notNullable().unique().unsigned().primary();
        table.boolean("university_degree");
        table.boolean("highschool_degree");
        table.string("other_certification");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("seeker_education");
};
