const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    guildID: String,
    channelID: String
})

module.exports = mongoose.model('welcomes', Schema)