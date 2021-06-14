const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const twitterRole = message.guild.roles.cache.get("715498418230788126");
  const notifsRole = message.guild.roles.cache.get("715498459108737094");
  const twitterEmoji = message.guild.emojis.cache.get("715497877224554557");
  const notifsEmoji = message.guild.emojis.cache.get("715497920748585001");
  const verifRole = message.guild.roles.cache.get("715493386689314907");
  const verifEmoji = message.guild.emojis.cache.get("715497089403977770");

  const embed = new MessageEmbed()
    .setTitle("Rôles")
    .setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant")
    .setColor("#dc143c")
    .addField(
      "Les rôles disponibles:",
      `
      ${twitterEmoji} - ${twitterRole.toString()}
      ${notifsEmoji} - ${notifsRole.toString()}
      ${verifEmoji} - ${verifRole.toString()}
      `
    );

    client.channels.cache.get('715497502937448470').send(embed).then(async msg => {
      await msg.react(twitterEmoji);
      await msg.react(notifsEmoji);
      await msg.react(verifEmoji);
    })
};

module.exports.help = {
  name: "allroles",
  aliases: ['al'],
  description: "tkt",
  cooldown: 0,
  usage: '',
  isUserAdmin: true,
  permissions: true,
  args: false
}
