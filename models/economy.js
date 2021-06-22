const mongoose = require('mongoose');

const economySchema = new mongoose.Schema({
    userID: {
        type: String,
        require: true,
        unique: true
    },
    guildID: {
        type: String,
        require: true
    },
    coins: {
        type: Number,
        default: 1000
      },
    bank: {
        type: Number
    },
})

const model = mongoose.model("eco", economySchema)
module.exports = model;