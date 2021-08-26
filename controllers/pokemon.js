'use strict'
var fs = require('fs');
var path = require('path');
var mongoosePaginate = require('mongoose-pagination');
var Pokemon = require('../models/pokemon');
var jwt = require('../services/jwt');


function getPokemon(req,res) {
    try {
        
        var filter = req.params.filter;
        Pokemon.find({"$or": [{
            "number": new RegExp('.*' + filter + '.*')
        }, {
            "name": { "$regex" : new RegExp('.*' + filter + '.*') , "$options" : "i"}
        }]}
        , (err,pokemon) => {
            if(err){
                res.status(500).send({state:false, message: err['message'], data: []});
            }else{
                if (!pokemon) {
                        res.status(400).send({state:false,message: 'El pokemon no existe', data: []});               
                }else{
                        res.status(200).send({state:true, message:'OK', data: pokemon});
                }
            } 
        });
    } catch (error) {
        res.status(400).send({state:false, message: error['message'], data: []});
    }
}

async function getPokemons(req, res) {
   
    try {
        //console.log(req.params);
        var page = 1;
        if (req.params.page) {
            page=req.params.page;
        }
        
        var itemsPerPage = 12;
        Pokemon.find().sort('id').paginate(page, itemsPerPage, function (err,pokemons,total) {
            if (err) {
                res.status(500).send({state:false,message:'Error en la peticion', data: []});
            } else {
                if (!pokemons) {
                    res.status(404).send({state:false,message:'no se encontro pokemons!!!', data: []});
                } else {
                    res.status(200).send({state:true, message:'OK',
                        total_items: total,
                        data:pokemons
                    });  
                }
            }
        });

        
    } catch (error) {
        res.status(400).send({state:false, message: err['message'], data: []});
    }
}



module.exports = {
    getPokemon,
    getPokemons,
};