
exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'sandwitch' },
    { recipe_name: 'pop tarts' },
  ]);
};
