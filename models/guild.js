const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: { "type": String, "default": defaults.prefix },
  registeredAt: { type: Number, default: Date.now() },

  balanceCommand: { type: String, default: true },
  begCommand: { type: String, default: true },
  buyCommand: { type: String, default: true },
  depositeCommad: { type: String, default: true },
  giveCommand: { type: String, default: true },
  sellCommand: { type: String, default: true },
  storeCommand:{ type: String, default: true },
  withdrawCommand: { type: String, default: true },

  eightballCommand: { type: String, default: true },
  fakesayCommand: { type: String, default: true },
  rpsCommand: { type: String, default: true },

  botinfoCommand:{ type: String, default: true },
  inviteCommand: { type: String, default: true },
  pollCommand: { type: String, default: true },
  sayComand: { type: String, default: true },

  banCommand: { type: String, default: true },
  kickCommand:{ type: String, default: true },
  lockchannelCommand:{ type: String, default: true },
  muteCommand: { type: String, default: true },
  unmuteCommand: { type: String, default: true },
  purgeCommand:{ type: String, default: true },
  unbanCommand: { type: String, default: true },

  clipCommand: { type: String, default: true },
  nowplayingCommand: { type: String, default: true },
  playCommand: { type: String, default: true },
  playlistCommand: { type: String, default: true },
  queueCommand: { type: String, default: true },
  removeCommand: { type: String, default: true },
  skiptoCommand: { type: String, default: true },
  ttsCommand: { type: String, default: true },

  animeCommand: { type: String, default: true },
  hmmmCommand: { type: String, default: true },
  memeCommand: { type: String, default: true },

  addxpCommand: { type: String, default: true },
  expCommand: { type: String, default: true },
  leaderboardCommand: { type: String, default: true },
  levelCommand: { type: String, default: true },
  removexpCommand: { type: String, default: true },

});

module.exports = mongoose.model("Guild", guildSchema);
