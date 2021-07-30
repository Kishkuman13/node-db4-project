
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'bread'},
    { ingredient_name: 'peanut butter'},
    { ingredient_name: 'jelly'},
    { ingredient_name: 'pop tarts'},
  ]);
};
