module.exports.run = (client, message, args, settings, dbUser, economyData) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToRemove = parseInt(args[1]);
  if (isNaN(expToRemove)) return message.reply("faut entrer un nombre.");
  client.removeExp(client, user, expToRemove);
  message.channel.send(`${message.guild.language.removexp.haveRemoved} ${expToRemove} ${message.guild.language.removexp.xpToUser} : ${user}!`);
};

module.exports.help = {
  name: "removexp",
  aliases: ['removeexperience', 'remexp'],
  category: 'xp',
  description: "🇫🇷 Enleve de l'expérience de l'utilisateur.\n🇬🇧 Remove xp to a specefic user.",
  cooldown: 10,
  usage: '<user> <amount_of_experience>',
  isUserAdmin: false,
  permissions: true,
  args: true,
  inDev: false
}