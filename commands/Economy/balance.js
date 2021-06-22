const economyModel = require('./../../models/economy');

module.exports.run = async (client, message, args) => {
  const economyData = await economyModel.findOne({ userID: message.author.id });

  message.channel.send(`${message.guild.language.coinsCount}` + `${economyData.coins}, ` + `${message.guild.language.bankCount}` + `${economyData.bank}.`)
};

module.exports.help = {
  name: "balance",
  aliases: ['b'],
  description: "🇫🇷 Affiche votre balance \n🇬🇧 Display ur balance.",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}