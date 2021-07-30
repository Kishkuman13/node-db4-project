const db = require('../../data/db-config');

function findAll() {
  return db('recipes');
}

async function findById(recipe_id) {
  const recipe = await db('complete_recipes as CR')
    .leftJoin('recipes as R', 'R.recipe_id', 'CR.recipe_id')
    .leftJoin('steps as S', 'S.step_id', 'CR.step_id')
    .leftJoin('ingredients as I', 'I.ingredient_id', 'CR.ingredient_id')
    .where({ 'R.recipe_id': recipe_id })
    .orderBy('step_number')
    .select(
      'R.recipe_id',
      'recipe_name',
      'S.step_id',
      'step_number',
      'step_instructions',
      'I.Ingredient_id',
      'ingredient_name',
      'ingredient_qty'
    );
  
  const mapIngr = recipe.map((ingredient) => {
    if (ingredient.ingredient_name === null) {
      return null;
    } else {
      return `${ingredient.ingredient_name} - ${ingredient.ingredient_qty}` ;
    }
  });

  const recipeObject = {
    recipe_id: recipe[0].recipe_id,
    recipe_name: recipe[0].recipe_name,
    ingredients:
      recipe[0].ingredient_name !== null ?
      mapIngr.filter((ingredient) => ingredient !== null)
      : [],
    steps:
      recipe[0].step_id !== null
        ? recipe.map((step) => {
          return {
            step_number: step.step_number,
            instructions: step.step_instructions,
          };
        })
        : [],
  };

  return recipeObject
}

module.exports = { findAll, findById };
