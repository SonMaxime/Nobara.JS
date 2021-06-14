const { Role } = require("discord.js");

module.exports = async (client, guild, settings) => {
  const db = client.db;
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  await client.createGuild(newGuild);

  await db.set(`${guild.id}.language`, "fr");
};