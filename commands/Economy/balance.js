const economyModel = require('./../../models/economy');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args, settings, dbUser) => {
  const economyData = await economyModel.findOne({ userID: message.author.id });

  const embed = new MessageEmbed()
  .setTitle(`${message.author.username}'s Balance`)
  .addFields(
    { name: 'Coins:', value: `${economyData.coins}`, inline: true },
    { name: 'Bank:', value: `${economyData.bank}`, inline: true }
  )

  var reactionMessage = await message.channel.send(embed)
  await reactionMessage.react("💸");
  await reactionMessage.react("🎮");
  await reactionMessage.react("⏹");

  const filter = (reaction, user) => user.id !== message.client.user.id;
  var collector = reactionMessage.createReactionCollector(filter, {
    time: 600000
  });

  collector.on("collect", (reaction, user) => {
    const member = message.guild.member(user);

    switch (reaction.emoji.name) {
      case "🎮":
        reaction.users.remove(user).catch(console.error);
        const objectEmbed = new MessageEmbed()
        .setTitle(`${message.author.username}'s object balance`)
        .addFields(
          { name: 'Cookie:', value: `${economyData.cookie}`, inline: true },
          { name: 'Fish:', value: `${economyData.fish}`, inline: true },
          { name: 'PC:', value: `${economyData.computer}`, inline: true },
          { name: 'Car:', value: `${economyData.car}`, inline: true },
          { name: 'Book:', value: `${economyData.book}`, inline: true },
        )
        reactionMessage.edit(objectEmbed);
      break;

      case "💸":
        reaction.users.remove(user).catch(console.error);
        reactionMessage.edit(embed);
      break;

      case "⏹":
        collector.stop();
      break;

      default:
        reaction.users.remove(user).catch(console.error);
      break;
    }

    collector.on("end", () => {
      reactionMessage.delete().catch(console.log);
    });
  });
};

module.exports.help = {
  name: "balance",
  aliases: ['b'],
  description: "🇫🇷 Affiche votre balance. \n🇬🇧 Display ur balance.",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}