const mongoose = require('mongoose');

let memorySchema = new mongoose.Schema({
    capicity: String,
    stickType : String,
    cellType : String,
    clockFrequency : String,
    brand : String,
    model : String,
    price: Number,
    releaseDate: Date
});

module.exports = mongoose.model("Memory", memorySchema);