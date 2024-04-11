const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
    isbn: {
        type: String,
        required: true,
        unique: true
    }
    
},{ minimize: false, versionKey: false });

module.exports = mongoose.model('Book', bookSchema);