const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args, settings, dbUser, economyData) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToAdd = parseInt(args[1]);
  if (isNaN(expToAdd)) return message.reply(message.guild.language.addxp.needToTag);
  client.addExp(client, user, expToAdd);
  const addEmbed = new MessageEmbed()
  .setColor('BLACK')
  .setDescription(message.guild.language.addxp.vousAvezAjoute + ` ${expToAdd} ` + message.guild.language.addxp.pointsUser + `${user}!`)
  message.channel.send(addEmbed);
};

module.exports.help = {
  name: "addxp",
  aliases: ['addexperience', 'addexp'],
  category: 'xp',
  description: "🇫🇷 Ajoute de l'expérience de l'utilisateur. \n🇬🇧 Add xp to a user.",
  cooldown: 10,
  usage: '<user> <amount_of_experience>',
  isUserAdmin: false,
  permissions: true,
  args: true,
  inDev: false
}