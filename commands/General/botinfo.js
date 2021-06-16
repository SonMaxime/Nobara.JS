const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor('#B4E0E0')
    .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
    .addFields(
      { name: 'Memory', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true },
      { name: 'Uptime', value: `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, inline: true },
      { name: '\u200b', value: `\u200b`, inline: true },
      { name: 'Guilds', value: `${client.guilds.cache.size.toString()}`, inline: true },
      { name: 'Channels', value: `${client.channels.cache.size.toString()}`, inline: true },
      { name: 'Users', value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true },
      { name: 'Version', value: `discord.js@12.5.1`, inline: true },
      { name: 'Support', value: `[Server Invite](https://discord.gg/78M3hSt)`, inline: true }
    );

		message.channel.send(embed);
};

module.exports.help = {
  name: "botinfo",
  aliases: ['bi'],
  category: 'general',
  description: "🇫🇷 Renvoie les informations sur le bot. \n🇬🇧 Gives informations about the bot.",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: false
}