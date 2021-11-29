const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader");
const { Database } = require("bookman");
const client = new Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INVITES'], restTimeOffset: 0, disableEveryone: true});

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