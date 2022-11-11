const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    contact :{
        type: String,
        required: true,
        unique: true
    },
    
    status:{
        type: String
    } 
        
})

const Compdb = mongoose.model('compdb', schema);

module.exports = Compdb;