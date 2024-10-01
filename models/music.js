const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const musicSchema = new mongoose.Schema({
    track: {
        type: String,
        required: true // This field is required
    },
    artist: {
        type: String,
        required: true // This field is required
    },
    album: {
        artist: String,
        releaseDate: {
            type: Date,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    genres: [String],
    keywords: [Strings]

}, { minimize: false, versionKey: false });

module.exports = mongoose.model('Music', musicSchema);
