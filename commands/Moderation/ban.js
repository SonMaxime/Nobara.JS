module.exports.run = (client, message, args, settings, dbUser, economyData) => {
  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || message.guild.language.ban.noReason);
  user ? message.guild.member(user).ban(reason) : message.channel.send(message.guild.language.ban.userNoExist);
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
  args: true,
  inDev: false
}