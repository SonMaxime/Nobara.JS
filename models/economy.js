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
    cookie: { type: Number, default: 0 },
    fish: { type: Number, default: 0 },
    car: { type: Number, default: 0 },
    book: { type: Number, default: 0 },
    computer: { type: Number, default: 0 }
})

const model = mongoose.model("eco", economySchema)
module.exports = model;