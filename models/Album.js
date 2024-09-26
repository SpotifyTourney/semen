const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: String, required: true }
});

module.exports = albumSchema;
