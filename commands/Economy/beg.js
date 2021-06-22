const profileModel = require('./../../models/economy');

module.exports.run = async (client, message, args, economyData) => {
  const randomNumber = Math.floor(Math.random() * 700) + 1;

  try {
    await profileModel.findOneAndUpdate(
      {
          userID: message.author.id
      },
      {
          $inc: {
              coins: randomNumber
          },
      }
    )
  } catch (err) {
    console.log(err)
  }

  return message.reply(`${message.guild.language.begged}` + `${randomNumber} ` + `${message.guild.language.coins}.`)
};

module.exports.help = {
  name: "beg",
  aliases: ['bg'],
  description: "🇫🇷 Réclamez des pièces. \n🇬🇧 Beg for coins.",
  cooldown: 86400,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}