'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PokemonSchema = Schema({
    abilities: [],
    detailPageURL: String,
    weight:Number,
    weakness: [],
    number: String,
    height: Number,
    collectibles_slug: String,
    featured: Boolean,
    slug: String,
    name: String,
    ThumbnailAltText: String,
    ThumbnailImage: String,
    id: Number,
    type: []
});

module.exports = mongoose.model('pokemon',PokemonSchema);

