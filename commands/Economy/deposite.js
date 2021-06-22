const profileModel = require('./../../models/economy');

module.exports.run = async (client, message, args, economyData) => {
  const amount = args[0];
  if (amount % 1 != 0 || amount <= 0) return message.reply(`${message.guild.language.depositNumber}`)
  try {
    if (amount > economyData.coins) return message.reply(`${message.guild.language.pasPossible}`);
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: -amount,
          bank: amount
        }
      }
    )
    return message.reply(`${message.guild.language.deposited}` + `${amount} ` + `${message.guild.language.sucessDeposite}`)
  } catch (err) {
    console.log(err)
  }
};

module.exports.help = {
  name: "deposite",
  aliases: ['d'],
  description: "🇫🇷 Déposez des pièces dans votre banque. \n🇬🇧 Deposite coins in ur bank.",
  cooldown: 10,
  usage: '<amount>',
  isUserAdmin: false,
  permissions: false,
  args: true
}