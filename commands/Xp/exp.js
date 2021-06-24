const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const user = message.guild.member(message.mentions.users.first());

  const userEmbed = new MessageEmbed()
  .setColor('BLACK')
  .setDescription(message.guild.language.exp.uHave + `${dbUser.experience}` + message.guild.language.exp.xpInStock)
  message.channel.send(userEmbed);
};

module.exports.help = {
  name: "exp",
  aliases: ['exp'],
  category: 'xp',
  description: "🇫🇷 Renvoie l'expérience de l'utilisateur. \n🇬🇧 Display the amount of xp of a user.",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: false
}