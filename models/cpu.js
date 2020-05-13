const mongoose = require('mongoose');

let cpuSchema = new mongoose.Schema({
    socket: String,
    brand : String,
    model : String,
    codeName : String,
    clock : String,
    threads : String,
    price: Number,
    releaseDate: Date
});

module.exports = mongoose.model("CPU", cpuSchema);