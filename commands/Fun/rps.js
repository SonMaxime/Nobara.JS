const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../util/resfunctions.js")
const chooseArr = ["🗻", "📰", "✂"];

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const embed = new MessageEmbed()
  .setColor("#ffffff")
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setDescription(message.guild.language.rps.ajouterReactionJouer)
  .setTimestamp()

  const m = await message.channel.send({ embeds: [embed] });
  const reacted = await promptMessage(m, message.author, 30, chooseArr);

  const choixDuBot = chooseArr[Math.floor(Math.random() * chooseArr.length)];

  const result = await getResult(reacted, choixDuBot);

  embed
    .setDescription("")
    .addField(result, `${reacted} vs ${choixDuBot}`);
  
  m.edit(embed)

  function getResult(me, clientChosen) {
    if ((me === "🗻" && clientChosen === "✂") ||
        (me === "📰" && clientChosen === "🗻") ||
        (me === "✂" && clientChosen === "📰")) {
            return message.guild.language.rps.uWin;
    } else if (me === clientChosen) {
        return message.guild.language.rps.draw;
    } else {
        return message.guild.language.rps.uLost;
    }
  }
};

module.exports.help = {
  name: "rps",
  aliases: ['rps'],
  category: 'fun',
  description: "🇫🇷 Piere, feuille, ciseaux ! \n🇬🇧 Rock, paper, Scisors !",
  cooldown: 10,
  usage: "",
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: false
}