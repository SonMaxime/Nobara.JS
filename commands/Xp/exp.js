const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  const userEmbed = new MessageEmbed()
  .setColor('BLACK')
  .setDescription(message.guild.language.uHave + `${dbUser.experience}` + message.guild.language.xpInStock)
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
  args: false
}