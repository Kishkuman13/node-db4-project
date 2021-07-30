
exports.seed = function(knex) {
  return knex('steps').insert([
    { step_instructions: 'Take bread out of bag'},
    { step_instructions: 'Spread peanut butter on one side of bread'},
    { step_instructions: 'Spread jelly on the other piece of bread'},
    { step_instructions: 'Combine the two pieces together, peanut butter to jelly'},
    { step_instructions: 'Take pop tarts out of packaging'},
    { step_instructions: 'Place pop tarts into toaster'},
    { step_instructions: 'Depress button, turning on the toaster'},
    { step_instructions: 'When toaster pops up, carefully retrieve the pop tarts'},
    { step_instructions: 'Allow time to cool before eating'}
  ])
};
