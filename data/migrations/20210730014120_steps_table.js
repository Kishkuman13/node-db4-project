
exports.up = function(knex) {
  return knex.schema.createTable('steps', (tbl) => {
      tbl.increments('step_id');
      tbl
        .string('step_instructions')
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
