const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#ad14da")
    .setDescription(args.join(" "))
    .addField(message.guild.language.poll.replyPollWithReact,
    `
    ð© -` + message.guild.language.poll.pour `
    ð¦ -` + message.guild.language.poll.neutre `
    ð¥ -` + message.guild.language.poll.contre `
    `)
    .setTimestamp()
    .setFooter(message.guild.language.poll.nePasHesiterARefaireUnSondage)

  const poll = await message.channel.send({ embeds: [embed, embed2] });
  await poll.react("ð©");
  await poll.react("ð¦");
  await poll.react("ð¥");
};

module.exports.help = {
  name: "poll", 
  aliases: ['poll'],
  category: 'general',
  description: "ð«ð· CrÃ©ez des sondages simples Ã  partir de cette commande. \nð¬ð§ Create some simple polls w/ this command.",
  cooldown: 20,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: false
}