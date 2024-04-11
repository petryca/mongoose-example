const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // This field is required
    },
    age: Number, // An optional field
    email: {
        type: String,
        required: true,
        unique: true // No two users can have the same email
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set to the current date
    },
    preferences: {
        // Nested object
        theme: {
            type: String,
            default: 'light'
        },
        notifications: {
            type: Boolean,
            default: true
        }
    },
    logins: [ // array of objects
        {
            logedinAt: { 
                type: Date,
                required: true
            },
            ipv4: {
                type: String,
                required: true
            }  
        }
    ]

}, { minimize: false, versionKey: false });

module.exports = mongoose.model('User', userSchema);
