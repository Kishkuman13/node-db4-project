
exports.up = function(knex) {
  return knex.schema.createTable('recipes', (tbl) => {
    tbl.increments('recipe_id');
    tbl
      .string('recipe_name')
      .notNullable()
      .unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
