const Recipes = require('./recipe_model');

const validateRecipeId = async (req, res, next) => {
  try {
    const recipe = await Recipes.findById(req.params.recipe_id);
    if(recipe) {
      req.recipe = recipe;
      next();
    } else {
      res.status(400).json({ message: 'No such recipe id' });
    }
  } catch(err) {
    next(err);
  }
}

module.exports = { validateRecipeId };
