'use strict'

const jwt = require('jsonwebtoken');
var moment = require('moment');
var tokenKey = process.env.TOKEN_KEY;


module.exports.ensureAuth = function(req, res, next) {
    const token = req.header('auth_token');
    if (!token) res.status(401).send('Acceso Denegado');
    try {
        //console.log(token);
        //console.log(jwt.verify(token, tokenKey));
        const verified = jwt.verify(token, tokenKey);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Token Invalido');
    }
}