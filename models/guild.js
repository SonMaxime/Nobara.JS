const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: {
    "type": String,
    "default": defaults.prefix
  },
  logChannel: {
    "type": String,
    "default": defaults.logChannel
  },
  welcomeMessage: {
    "type": String,
    "default": defaults.welcomeMessage
  },
  leaveMessage:{
    "type": String,
    "default": defaults.leaveMessage
  },
  welcomeChannel: {
    "type": String,
    "default": defaults.welcomeChannel
  },
  LOCALE: {
    "type": String,
    "default": defaults.LOCALE
  }
});

module.exports = mongoose.model("Guild", guildSchema);
