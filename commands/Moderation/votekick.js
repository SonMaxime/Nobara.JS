const Discord = require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Veuillez mentionner un utilisateur à kick !");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply(":x: " + "| wlh ca marche pas");
  }

  let msg = await message.channel.send(`Vote pour kick ${message.mentions.users.first().username}${message.mentions.users.first().discriminator}(50 Seconds)`);
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var votekick = new Discord.MessageEmbed()
  
            .addField("Vote terminé :", "----------------------------------------\n" +
                                          `Total votes ` + `${message.guild.language.yes} ` + `${YES_Count-1}\n` +
                                          `Total votes ` + `${message.guild.language.no} ` + `${NO_Count-1}\n` +
                                          "----------------------------------------\n" +
                                          `${message.guild.language.noteOfKick}\n` +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")
            .setFooter(`Vote kick by SonMaxime`);
  await message.channel.send({embed: votekick});

  if(YES_Count >= 5 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
    })
  }else{

    message.channel.send("\n" + "SAFE..... FOR NOW");
  }

}

module.exports.help = {
  name: "votekick",
  aliases: ['vk'],
  category: "Vote pour kick un utilisateur.",
  cooldown: 0,
  usage: '@user',
  isUserAdmin: false,
  permissions: true,
  args: true
}