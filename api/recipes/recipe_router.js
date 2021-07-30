const express = require('express');
const { validateRecipeId } = require('./middleware');
const Recipes = require('./recipe_model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Recipes.findAll()
    .then((recipes) => {
      res.json(recipes)
    })
    .catch(next);
});

router.get('/:recipe_id', validateRecipeId, (req, res, next) => {
  const { recipe_id } = req.params;

  Recipes.findById(recipe_id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = router;
