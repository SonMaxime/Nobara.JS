const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (!user.roles.cache.has(muteRole.id)) return message.reply(message.guild.language.isNotMuted);
  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> ` + message.guild.language.isUnmuted);
};

module.exports.help = {
  name: "unmute",
  aliases: ['unmute'],
  category: 'moderation',
  description: "🇫🇷 Unmute un utilisateur. \n🇬🇧 Unmute a user.",
  cooldown: 10,
  usage: '<@user>',
  isUserAdmin: true,
  permissions: true,
  args: true,
  inDev: false
}