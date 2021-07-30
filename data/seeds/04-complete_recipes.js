
exports.seed = function(knex) {
  return knex('complete_recipes').insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      ingredient_qty: '2 slices',
      step_number: 1,
      step_id: 1,
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      ingredient_qty: '2 oz',
      step_number: 2,
      step_id: 2,
    },
    {
      recipe_id: 1,
      ingredient_id: 3,
      ingredient_qty: '2 oz',
      step_number: 3,
      step_id: 3,
    },
    {
      recipe_id: 1,
      step_number: 4,
      step_id: 4,
    },
    {
      recipe_id: 2,
      ingredient_id: 4,
      ingredient_qty: '1 single-serve package',
      step_number: 1,
      step_id: 5,
    },
    {
      recipe_id: 2,
      step_number: 2,
      step_id: 6,
    },
    {
      recipe_id: 2,
      step_number: 3,
      step_id: 7,
    },
    {
      recipe_id: 2,
      step_number: 4,
      step_id: 8,
    },
    {
      recipe_id: 2,
      step_number: 5,
      step_id: 9,
    },
  ]);
};
