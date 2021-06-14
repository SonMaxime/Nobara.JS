const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, member, settings) => {
   let data =  await Guild.findOne({
      guildID: member.guild.id
   });
   let channel = member.guild.channels.cache.find(ch => ch.name == data.welcomeChannel);
   if(channel) return;
    
   const embed = new MessageEmbed()
   .setColor('BLACK')
   .setDescription(data.welcomeMessage)
   channel.send(embed);
}