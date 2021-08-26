'use strict'

var express = require('express');
var bodyParse = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors());
//cargar rutas
var user_routes = require('./routes/user')
var pokemon_routes = require('./routes/pokemon')
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.use('/api/user', user_routes)
app.use('/api/pokedex', pokemon_routes)
module.exports = app;