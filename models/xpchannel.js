const mongoose = require('mongoose');

const xpChannelSchema= new mongoose.Schema({
    guildID: String,
    channelID: String,
});

module.exports = mongoose.model('xpchannel', xpChannelSchema);