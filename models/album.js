const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // This field is required
    },
    artist: String,
    releaseDate: {
        type: Date,
        required: true
    },
    tracks: [
        {
            name: {
                type: String,
                required: true
            },
            artist: String   
        }
    ],
    genres: [String],
    keywords: [Strings]

}, { minimize: false, versionKey: false });

module.exports = mongoose.model('Album', albumSchema);
