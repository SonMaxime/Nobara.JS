const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || message.guild.language.noReason);
  user ? message.guild.member(user).ban(reason) : message.channel.send(message.guild.language.userNoExist);
};

module.exports.help = {
  name: "ban",
  aliases: ['ban'],
  category: 'moderation',
  description: "🇫🇷 Ban un utilisateur. \n🇬🇧 Ban a user.",
  cooldown: 10,
  usage: '<@user> <reason>',
  isUserAdmin: true,
  permissions: true,
  args: true
}