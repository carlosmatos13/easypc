const mongoose = require('mongoose');

let buildSchema = new mongoose.Schema({
    cpu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CPU"
    },
    gpu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "GPU"
    },
    motherboard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Motherboard"
    },
    memory: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Memory"
        }
    ],
    power:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PowerSupply"
    },
    case: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Case"
    },
    storage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Storage"
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }

});

module.exports = mongoose.model("Build", buildSchema);