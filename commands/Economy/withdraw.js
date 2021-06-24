const profileModel = require('./../../models/economy');

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
    const amount = args[0];

    if (amount % 1 != 0 || amount <= 0) {
        return message.channel.send(message.guild.language.withdraw.withdrawNumber)
    }

    try {
        if (amount > economyData.bank) {
            return message.channel.send(message.guild.language.withdraw.dontAmountBank)
        } else {
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amount,
                        bank: -amount,
                    },
                }
            );

            return message.channel.send(`${message.guild.language.withdraw.youWithdrew}` + `${amount} ` + `${message.guild.language.withdraw.ofCoinsInWallet}`)
        }
    } catch (err) {
        console.log(err)
    }
};

module.exports.help = {
  name: "withdraw",
  aliases: ['w'],
  description: "🇫🇷 Retirez des pièces de votre banque. \n🇬🇧 Withdraw coins from ur bank.",
  cooldown: 10,
  usage: '<amount>',
  isUserAdmin: false,
  permissions: false,
  args: true
}