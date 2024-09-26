const mongoose = require('mongoose');
const albumSchema = require('./Album.js'); 

const userSchema = new mongoose.Schema({
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    albums: [albumSchema] 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
