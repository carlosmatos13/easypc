const mongoose = require('mongoose');

let storageSchema = new mongoose.Schema({
    brand: String,
    series : String,
    model : String,
    deviceType : String,
    formFactor : String,
    capacity : String,
    price: Number,
    releaseDate: Date
});

module.exports = mongoose.model("Storage", storageSchema);