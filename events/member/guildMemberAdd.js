const { MessageEmbed } = require("discord.js");
const Welcome = require('./../../models/welcome');

module.exports = async (client, member, guild) => {
  Welcome.findOne({ guildID: member.guild.id }, async (err, data) => {
    if (!data) {
      return;
    } else {
      const user = member.user;
      const channel = member.guild.channels.cache.get(data.channelID);

      channel.send(`Welcome ${user} !`)
    }
  });

  await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag
  });
}