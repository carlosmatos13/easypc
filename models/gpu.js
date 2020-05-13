const mongoose = require('mongoose');

let gpuSchema = new mongoose.Schema({
    manufacturer: String,
    brand : String,
    model : String,
    gpuClock : String,
    memoryclock : String,
    memory : String,
    bus : String,
    price: Number,
    releaseDate: Date
});

module.exports = mongoose.model("GPU", gpuSchema);