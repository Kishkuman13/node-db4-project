
exports.up = function(knex) {
  return knex.schema.createTable('complete_recipes', (tbl) => {
    tbl.increments('complete_recipe_id');
    tbl
      .integer('step_number')
      .notNullable();
    tbl.string('ingredient_qty');
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('recipes.recipe_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('step_id')
      .references('steps.step_id')
      .unsigned()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('ingredient_id')
      .references('ingredients.ingredient_id')
      .unsigned()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('complete_recipes');
};
