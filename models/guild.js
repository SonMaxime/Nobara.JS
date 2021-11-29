const mongoose = require("mongoose");
const defaults = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: { 
    "type": String, 
    "default": defaults.prefix
  },
  registeredAt: { 
    type: Number, 
    default: Date.now()
  },
  welcomeChannel: {
    type: String,
  },
  xpChannel: {
    type: String,
  }

});

module.exports = mongoose.model("Guild", guildSchema);
