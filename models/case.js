const mongoose = require('mongoose');

let caseSchema = new mongoose.Schema({
    model: String,
    weight : String,
    brand : String,
    price: Number,
    releaseDate: Date
});

module.exports = mongoose.model("Case", caseSchema);