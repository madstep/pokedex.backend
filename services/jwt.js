'use strict'
var jwt = require('jsonwebtoken');
var moment = require('moment');
var secret = process.env.TOKEN_KEY;

exports.createToken = function(user) {
    var payload = {
        sub: user.id,
        name: user.name,
        email: user.email,
        role: '',
        iat: moment().unix(),
        exp: moment().add(30,'days').unix
    };

    console.log('secret: ',secret)
    return jwt.sign({
        payload
      }, secret);
};