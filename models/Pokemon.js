const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    _id: String,
    pkdx_id: String,
    national_id: Number,
    name: String,
    __v: Number,
    image_url: String,
    description: String,
    art_url: String,
    types: {
        type: Array,
        "default": []
    },
    evolutions: [
        {
            level: Number,
            method : String,
            to: String,
            _id: String
        }
    ],
    base: {
        type: Object,
        default: {}
    }
})

module.exports = mongoose.model('Pokemon', PokemonSchema)