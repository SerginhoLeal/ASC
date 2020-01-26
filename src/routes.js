const express = require('express');
const routes = express.Router();

const GameController = require('./controllers/GameController');

routes.get('/game', GameController.index);
routes.post('/game', GameController.store);

module.exports = routes;