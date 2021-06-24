module.exports.run = (client, message, args, settings, dbUser, economyData) => {
  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || message.guild.language.kick.noReason);
  user ? message.guild.member(user).kick(reason) : message.channel.send(message.guild.language.kick.userNoExist);
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