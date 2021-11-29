const profileModel = require('./../../models/economy');

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const amount = args[0];
  if (amount % 1 != 0 || amount <= 0) return message.reply({ content: `${message.guild.language.deposite.depositNumber}`, allowedMentions: { repliedUser: true }})
  try {
    if (amount > economyData.coins) return message.reply({ content: `${message.guild.language.deposite.pasPossible}`, allowedMentions: { repliedUser: true }});
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
    return message.reply({ content: `${message.guild.language.deposite.deposited}` + `${amount} ` + `${message.guild.language.deposite.sucessDeposite}`, allowedMentions: { repliedUser: false }})
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