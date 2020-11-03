//mongose - connecta seu back com o banco mongodb
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const maravilhosaSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo de dado
        auto: true, //autogerado
        required: true //é obrigatorio
    },   

    name:{
        type: String,
        required: true,
        unique: true //pra não ser repetido

    },

    photo:{
        type: String,
        required: true
    },

    subtitle:{
        type: String,
        required: true
    },

    about:{
        type: String,
        required: true
    },

    phrase:{
        type: String,
        required: true
    },

    history:[{
        type: String,
        required: true
    }],

    addedBy:{
        type: String,
        required: true
    }

},
{
    collection: "maravilhosa",
    versionKey: false
}

);

//qual collection
const maravilhosaCollection = mongoose.model('maravilhosa', maravilhosaSchema)

module.exports = {maravilhosaCollection}