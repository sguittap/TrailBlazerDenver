const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
    name: { type: String, required: true},
    location: String,
    description: String,
    rating: Number

});

module.exports = mongoose.model('Trail', trailSchema);