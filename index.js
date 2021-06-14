const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader");
const { Database } = require("bookman");

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });;

require("./util/functions")(client);
client.config = require("./config");
client.commands = new Collection();
client.queue = new Map();
client.db = new Database("database/main");
client.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
client.mongoose.init();
  
client.login(client.config.TOKEN);