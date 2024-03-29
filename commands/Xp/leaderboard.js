const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const embed = new MessageEmbed()
    .setTitle(message.guild.language.leaderboard.top4OfUsers)
    .setColor("#a41f14")
    .setTimestamp()
    .setFooter("Experience")

  await client.getUsers(message.guild).then(p => {
    p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 4).forEach(e => {
      embed.addField(e.username, `${e.experience} XP - Level ${e.level}`);
    });
  });

  message.channel.send({ embeds: [embed] });

};

module.exports.help = {
  name: "leaderboard",
  aliases: ['lead', 'classement', 'class'],
  category: 'xp',
  description: "🇫🇷 Affiche le clasement (Top 3) des membres sur le serveur. \nn🇬🇧 Display the top 3 of users on a server.",
  cooldown: 30,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: false
}