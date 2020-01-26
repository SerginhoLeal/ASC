const mongoose = require('mongoose');
const Game = require('../models/Game');

module.exports = {
	//listagem
	async index(req, res) {
        
		const games = await Game.find();

		return res.json(games);
    },
    async store(req, res){
        const game = await Game.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createAd: req.body.createAd
        })
        return res.json(game)
    },
}