const profileModel = require('./../../models/economy');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message) => {
  const storeembed = new MessageEmbed()
  .setTitle('Shop')
  .setDescription(message.guild.language.shopDescription)
  .addFields(
    { name: 'Cookie', value: '`ID: cookie`, 250 coins', inline: true },
    { name: 'Fish', value: '`ID: fish`, 300 coins', inline: true },
    { name: 'Car', value: '`ID: car`, 1000 coins', inline: true },
    { name: 'Book', value: '`ID: book`, 150 coins', inline: true },
    { name: 'Computer', value: '`ID: pc`, 700 coins', inline: true }
  )
  .addField('\u200b', '\u200b')
  .addField("Sell Item", '[AVIABLE SOON]()', true)
  .setFooter(message.guild.language.shopFooter)

  message.channel.send(storeembed)
}

module.exports.help = {
  name: "store",
  aliases: [],
  description: "🇫🇷 Donnez des pièces à un joueur. \n🇬🇧 Give a player some coins.",
  cooldown: 10,
  usage: '<target>',
  isUserAdmin: false,
  permissions: false,
  args: false
}