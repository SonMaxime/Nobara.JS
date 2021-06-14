const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: { "type": String, "default": defaults.prefix },
  registeredAt: { type: Number, default: Date.now() },
  addons: { type: Object, default: {
    welcome: {
      enabled: false,
      channel:  null,
      message: null,
      embed: false
    },
    goodbye: {
      enabled: false,
      channel:  null,
      message: null,
      embed: false
    },
    logs: { 
      enabled: false,
      channel:  null,
      message: null,
      embed: false
    },
  }}
});

module.exports = mongoose.model("Guild", guildSchema);
