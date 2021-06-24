const profileModel = require('./../../models/economy');
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const item = args[0];

  const embed = new MessageEmbed()
  .setDescription(message.guild.language.buy.buySucess)

  if (item === 'cookie') {
      const cookiePrice = 250;
      if (economyData.coins < cookiePrice) {
          return message.reply(message.guild.language.buy.pasPossible)
      } else {
        await profileModel.findOneAndUpdate(
              {
                  userID: message.author.id,
              },
              {
                  $inc: {
                      coins: -cookiePrice,
                      cookie: 1
                  },
              },
          )
        return message.channel.send(embed)
      }
  } else if (item === 'fish') {
      const fishPrice = 300;
      if (economyData.coins < fishPrice) {
        return message.reply(message.guild.language.buy.pasPossible)
      } else {
        await profileModel.findOneAndUpdate(
              {
                  userID: message.author.id,
              },
              {
                  $inc: {
                      coins: -fishPrice,
                  },
              },
              {
                  store: {
                      fish: 1,
                  },
              },
          )
        return message.channel.send(embed)
      }
  } else {
      if (item === 'car') {
          const carPrice = 1000;
          if (economyData.coins < carPrice) {
            return message.reply(message.guild.language.buy.pasPossible)
          } else {
              await profileModel.findOneAndUpdate(
                  {
                      userID: message.author.id,
                  },
                  {
                      $inc: {
                          coins: -carPrice
                      }
                  },
                  {
                      store: {
                          car: 1,
                      },
                  },
              )
              return message.channel.send(embed)
          }
      } else {
          if (item === 'book') {
              const bookPrice = 150;
              if (economyData.coins < bookPrice) {
                return message.reply(message.guild.language.buy.pasPossible)
              } else {
                  await profileModel.findOneAndUpdate(
                      {
                          userID: message.author.id,
                      },
                      {
                          $inc: {
                              coins: -bookPrice,
                          },
                      },
                      {
                          store: {
                              book: 1
                          }
                      }
                  )
                  return message.channel.send(embed)
              }
          } else {
              if (item === 'pc') {
                  const pcPrice = 700;
                  if (economyData.coins < pcPrice) {
                    return message.reply(message.guild.language.buy.pasPossible)
                  } else {
                      await profileModel.findOneAndUpdate(
                          {
                              userID: message.author.id,
                          },
                          {
                              $inc: {
                                  coins: -pcPrice,
                              },
                          },
                          {
                              store: {
                                  computer: 1,
                              },
                          },
                      )
                      return message.channel.send(embed)
                  }
              }
          }
      }
  }
}

module.exports.help = {
  name: "buy",
  aliases: [],
  description: "PLACEHOLDER",
  cooldown: 10,
  usage: '<object>',
  isUserAdmin: false,
  permissions: false,
  args: true
}