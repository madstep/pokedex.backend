'use strict'
var express = require('express');
var UserController = require('../controllers/user');
// var md_auth = require('../middlewares/authenticated');


var api = express.Router();

api.post('/login', UserController.loginUser);

module.exports = api;