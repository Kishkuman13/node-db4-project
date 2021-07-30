const express = require('express');
const helmet = require('helmet');
const router = require('./recipes/recipe_router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', router);

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;
