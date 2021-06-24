const profileModel = require('./../../models/economy');

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
    if (!args.length) return message.channel.send(message.guild.language.give.mentionPlayer);

    const amount = args[0];
    const target = message.mentions.users.first();

    if(!target) message.channel.send(message.guild.language.give.userDontExist)

    if (amount % 1 != 0 || amount <= 0) {
      return message.channel.send(message.guild.language.give.depositNumber);
    }

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) {
        return message.channel.send(message.guild.language.give.userDontExistInDB)
      } else {
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              coins: amount,
            },
          }
        );

        return message.channel.send(`${message.guild.language.give.playerGivenCoins}` + `${amount} ` + `${message.guild.language.give.amountOfCoins}`)
      }
    } catch (err) {
      console.log(err)
    }
};

module.exports.help = {
  name: "give",
  aliases: ['g'],
  description: "🇫🇷 Donnez des pièces à un joueur. \n🇬🇧 Give a player some coins.",
  cooldown: 10,
  usage: '<target> <amount>',
  isUserAdmin: false,
  permissions: false,
  args: true
}