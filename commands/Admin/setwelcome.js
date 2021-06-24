const { MessageEmbed } = require("discord.js");
const Schema = require('../../models/guild');

module.exports.run = (client, message, args, settings, dbUser, economyData) => {
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply(message.guild.language.setwelcome.welcomeChannelError);

    Schema.findOne({ guildID: message.guild.id }, async (err, data) => {
        if (data) {
            data.welcomeChannel = channel.id;
            data.save();
        } else {
            new Schema({
                guildID: message.guild.id,
                welcomeChannel: channel.id
            }).save();
        }
        message.reply(message.guild.language.setwelcome.welcomeChannel + ` ${channel}.`)
    })
};

module.exports.help = {
  name: "setwelcome",
  aliases: ['sw'],
  category: 'admin',
  description: "🇫🇷 Définis un salon de bienvenue. \n🇬🇧 Sets a welcome channel.",
  cooldown: 10,
  usage: 'channel id',
  isUserAdmin: false,
  permissions: true,
  args: true
}