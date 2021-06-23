const profileModel = require('./../../models/economy');

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const item = args[0];

  if (item === 'cookie') {
      const cookiePrice = 250;
      const cookieAmount = 1;
      if (economyData.cookie < cookieAmount) {
          return message.reply(message.guild.language.pasPossibleSell)
      } else {
        await profileModel.findOneAndUpdate(
              {
                  userID: message.author.id,
              },
              {
                  $inc: {
                      coins: cookiePrice,
                      cookie: -cookieAmount
                  },
              },
          )
        return message.channel.send(message.guild.language.sellSucess)
      }
  } else if (item === 'fish') {
      const fishPrice = 300;
      const fishAmount = 1;
      if (economyData.fish < fishAmount) {
        return message.reply(message.guild.language.pasPossibleSell)
      } else {
        await profileModel.findOneAndUpdate(
              {
                  userID: message.author.id,
              },
              {
                  $inc: {
                      coins: fishPrice,
                      fish: -fishAmount,
                  },
              },
          )
        return message.channel.send(message.guild.language.sellSucess)
      }
  } else {
      if (item === 'car') {
          const carPrice = 1000;
          const carAmount = 1;
          if (economyData.car < carAmount) {
            return message.reply(message.guild.language.pasPossibleSell)
          } else {
              await profileModel.findOneAndUpdate(
                  {
                      userID: message.author.id,
                  },
                  {
                      $inc: {
                          coins: carPrice,
                          car: -carAmount
                      }
                  },
              )
              return message.channel.send(message.guild.language.sellSucess)
          }
      } else {
          if (item === 'book') {
              const bookPrice = 150;
              const bookAmount = 1;
              if (economyData.book < bookAmount) {
                return message.reply(message.guild.language.pasPossibleSell)
              } else {
                  await profileModel.findOneAndUpdate(
                      {
                          userID: message.author.id,
                      },
                      {
                          $inc: {
                              coins: bookPrice,
                              book: -bookAmount
                          },
                      },
                  )
                  return message.channel.send(message.guild.language.sellSucess)
              }
          } else {
              if (item === 'pc') {
                  const pcPrice = 700;
                  const pcAmount = 1;
                  if (economyData.computer < pcAmount) {
                    return message.reply(message.guild.language.pasPossibleSell)
                  } else {
                      await profileModel.findOneAndUpdate(
                          {
                              userID: message.author.id,
                          },
                          {
                              $inc: {
                                  coins: pcPrice,
                                  computer: -pcAmount,
                              },
                          },
                      )
                      return message.channel.send(message.guild.language.sellSucess)
                  }
              }
          }
      }
  }
}

module.exports.help = {
  name: "sell",
  aliases: [],
  description: "PLACEHOLDER",
  cooldown: 10,
  usage: '<object>',
  isUserAdmin: false,
  permissions: false,
  args: true
}
