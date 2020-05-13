const mongoose = require('mongoose');

let powerSchema = new mongoose.Schema({
    input: String,
    output : String,
    modular : Boolean,
    certification : String,
    load : String,
    model : String,
    brand : String,
    series: String,
    price: Number,
    releaseDate: Date
});

module.exports = mongoose.model("PowerSupply", powerSchema);