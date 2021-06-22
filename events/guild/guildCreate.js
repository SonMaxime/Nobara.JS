module.exports = async (client, guild) => {
  const db = client.db;
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  await client.createGuild(newGuild);

  await db.set(`${guild.id}.language`, "fr");
};