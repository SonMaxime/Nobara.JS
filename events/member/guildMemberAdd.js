const { MessageEmbed } = require("discord.js");

module.exports = async (client, member, settings) => {
  let data =  await Guild.findOne({
    guildID: member.guild.id
  });
  let channel = member.guild.channels.cache.find(ch => ch.name == data.welcomeChannel);
  if(channel) return;
  
  const embed = new MessageEmbed()
  .setColor('BLACK')
  .setDescription(`Welcome ${user}`)
  channel.send(embed);

  await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag,
  });
}