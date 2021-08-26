'use strict'
var fs = require('fs');
var path = require('path');
var bcrypt = require('bcryptjs');
var User = require('../models/user');
var jwt = require('../services/jwt');


function loginUser(req, res) {
    var params = req.body;
    var email = params.email;
    var password = params.password;
    
    User.findOne({email:email.toLowerCase()},(err, user)=>{
        if(err){
            res.status(500).send({state:false, message: err['message']});
        }else{
            if(!user){
                res.status(404).send({state:false, message: 'El usuario no existe'});
            }else{
                bcrypt.compare(password, user.password, function(err, check) {
                   if(check){
                        //devolver los datos del usuario logueado
                        if(params.gethash){
                            //devolver un token de jwt
                            res.status(200).send({
                                token: jwt.createToken(user)
                            });
                        }else{
                            res.status(200).send({state:true, user});
                        }
                   }else{
                        res.status(404).send({state:false, message: 'El usuario no ha podido loguearse'});
                   } 
                });
            }
        }
    });
}


module.exports = {
    loginUser,
};