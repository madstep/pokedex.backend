'use strict'

var express = require('express');
var pokedexController = require('../controllers/pokemon');
var md_auth = require('../middlewares/authenticated');


var api = express.Router();
api.get('/getPokemon/:filter?',pokedexController.getPokemon);
api.get('/getPokemons/:page?',pokedexController.getPokemons);
// api.get('/getPokemon/:id?',md_auth.ensureAuth,pokedexController.getPokemon);
// api.get('/getPokemons/:page?',md_auth.ensureAuth,pokedexController.getPokemons);
module.exports = api;