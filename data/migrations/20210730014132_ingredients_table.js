
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', (tbl) => {
      tbl.increments('ingredient_id');
      tbl
        .string('ingredient_name')
        .notNullable()
        .unique();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
