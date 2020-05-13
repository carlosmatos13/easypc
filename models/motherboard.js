const mongoose = require('mongoose');

let motherboardSchema = new mongoose.Schema({
    chipset: String,
    socket : String,
    memorySlots : String,
    brand: String,
    formFactor: String,
    memoryType: String,
    networkChip: String,
    audioChip: String,
    model: String,
    price: Number,
    releaseDate: Date
});

module.exports = mongoose.model("Motherboard", motherboardSchema);