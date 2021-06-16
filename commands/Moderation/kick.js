const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || message.guild.language.noReason);
  user ? message.guild.member(user).kick(reason) : message.channel.send(message.guild.language.userNoExist);
};

module.exports.help = {
  name: "kick",
  aliases: ['kick'],
  category: 'moderation',
  description: "🇫🇷 Kick un utilisateur. \n🇬🇧 Kick a user.",
  cooldown: 10,
  usage: '<@user> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true,
  inDev: false
}