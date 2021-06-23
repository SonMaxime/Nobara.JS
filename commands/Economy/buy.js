const profileModel = require('./../../models/economy');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const item = args[0];

  if (item === 'cookie') {
      const cookiePrice = 250;
      if (economyData.coins < cookiePrice) {
          return message.reply(message.guild.language.pasPossible)
      } else {
        await profileModel.findOneAndUpdate(
              {
                  userID: message.author.id,
              },
              {
                  $inc: {
                      coins: -cookiePrice,
                  },
              }
          )
        return message.channel.send(message.guild.language.buySucess)
      }
  } else if (item === 'fish') {
      const fishPrice = 300;
      if (economyData.coins < fishPrice) {
        return message.reply(message.guild.language.pasPossible)
      } else {
        await profileModel.findOneAndUpdate(
              {
                  userID: message.author.id,
              },
              {
                  $inc: {
                      coins: -fishPrice,
                  },
              }
          )
        return message.channel.send(message.guild.language.buySucess)
      }
  } else {
      if (item === 'car') {
          const carPrice = 1000;
          if (economyData.coins < carPrice) {
            return message.reply(message.guild.language.pasPossible)
          } else {
              await profileModel.findOneAndUpdate(
                  {
                      userID: message.author.id,
                  },
                  {
                      $inc: {
                          coins: -carPrice
                      }
                  }
              )
              return message.channel.send(message.guild.language.buySucess)
          }
      } else {
          if (item === 'book') {
              const bookPrice = 150;
              if (economyData.coins < bookPrice) {
                return message.reply(message.guild.language.pasPossible)
              } else {
                  await profileModel.findOneAndUpdate(
                      {
                          userID: message.author.id,
                      },
                      {
                          $inc: {
                              coins: -bookPrice,
                          },
                      }
                  )
                  return message.channel.send(message.guild.language.buySucess)
              }
          } else {
              if (item === 'pc') {
                  const pcPrice = 700;
                  if (economyData.coins < pcPrice) {
                    return message.reply(message.guild.language.pasPossible)
                  } else {
                      await profileModel.findOneAndUpdate(
                          {
                              userID: message.author.id,
                          },
                          {
                              $inc: {
                                  coins: -pcPrice,
                              },
                          }
                      )
                      return message.channel.send(message.guild.language.buySucess)
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