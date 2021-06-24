const { MessageEmbed } = require("discord.js");
const Schema = require('../../models/guild');

module.exports.run = (client, message, args, settings, dbUser, economyData) => {
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply(message.guild.language.setxpchannel.xpChannelError);

    Schema.findOne({ guildID: message.guild.id }, async (err, data) => {
        if (data) {
            data.xpChannel = channel.id;
            data.save();
        } else {
            new Schema({
                guildID: message.guild.id,
                xpChannel: channel.id
            }).save();
        }
        message.reply(message.guild.language.setxpchannel.xpChannel + ` ${channel}.`)
    })
};

module.exports.help = {
  name: "setxpchannel",
  aliases: ['sxp'],
  category: 'admin',
  description: "🇫🇷 Définis un salon d'xp. \n🇬🇧 Sets a level up channel.",
  cooldown: 10,
  usage: 'channel id',
  isUserAdmin: false,
  permissions: true,
  args: true
}