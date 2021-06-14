const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run = async (client, message, args, settings) => {
  if (!args.length) {
    const menuEmbed = new MessageEmbed()
    .setColor("#36393F")
    .setTitle('Help Menu of Horizon')
    .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
    .addFields(
      {name: ":gear: `Admin` : ", value: `${message.guild.language.adminDescription}`},
      {name: ":video_game: `Fun` : ", value: `${message.guild.language.funDescription}`},
      {name: ":thought_balloon: `General` : ", value: `${message.guild.language.miscDescription}`},
      {name: ":tools: `Moderation` : ", value: `${message.guild.language.modDescription}`},
      {name: ":musical_note: `Music` : ", value: `${message.guild.language.musicDescription}`},
      {name: ":newspaper: `Reedit` : ", value: `${message.guild.language.reeditDescription}`},
      {name: ":chart_with_upwards_trend: `Stats` : ", value: `${message.guild.language.statsDescription}`},
      {name: ":crossed_swords: `XP` : ", value: `${message.guild.language.xpDescription}`}
    )
    .setFooter("Dashboard : http://185.44.81.138:1196/")
    var reactionMessage = await message.channel.send(menuEmbed)
    await reactionMessage.react("⚙️");
    await reactionMessage.react("🎮");
    await reactionMessage.react("💭");
    await reactionMessage.react("🛠️");
    await reactionMessage.react("🎵");
    await reactionMessage.react("📰");
    await reactionMessage.react("📈");
    await reactionMessage.react("⚔️");
    await reactionMessage.react("🏠");
    await reactionMessage.react("⏹");

    const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = reactionMessage.createReactionCollector(filter, {
      time: 600000
    });

    collector.on("collect", (reaction, user) => {
      const member = message.guild.member(user);

      switch (reaction.emoji.name) {
        case "🎵":
          reaction.users.remove(user).catch(console.error);
          const npcommand = client.commands.get("nowplaying")
          const playcommand = client.commands.get("play")
          const playlistcommand = client.commands.get("playlist")
          const queuecommand = client.commands.get("queue")
          const removecommand = client.commands.get("remove")
          const skiptocommand = client.commands.get("skipto")
          const musicEmbed = new MessageEmbed()
          .setTitle('Music Help')
          .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
          .addFields(
            {name: "`nowplaying` :", value: `${npcommand.help.description}`},
            {name: "`play` : ", value: `${playcommand.help.description}`},
            {name: "`playlist` :", value: `${playlistcommand.help.description}`},
            {name: "`queue` : ", value: `${queuecommand.help.description}`},
            {name: "`remove` : ", value: `${removecommand.help.description}`},
            {name: "`skipto` : ", value: `${skiptocommand.help.description}`},
          )
          .setFooter("Dashboard : http://185.44.81.138:1196/")
         reactionMessage.edit(musicEmbed);
          break;

        case "🎮":
          reaction.users.remove(user).catch(console.error);
          const ballcommand = client.commands.get("8ball")
          const rpscommand = client.commands.get("rps")
          const funEmbed = new MessageEmbed()
          .setTitle('Fun Help')
          .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
          .addFields(
            {name: "`8ball` :", value: `${ballcommand.help.description}`},
            {name: "`rps` : ", value: `${rpscommand.help.description}`}
          )
          .setFooter("Dashboard : http://185.44.81.138:1196/")
         reactionMessage.edit(funEmbed);
          break;

        case "💭":
          reaction.users.remove(user).catch(console.error);
          const botinfocommand = client.commands.get("botinfo")
          const helpcommand = client.commands.get("help")
          const invitecommand = client.commands.get("invite")
          const pollcommand = client.commands.get("poll")
          const saycommand = client.commands.get("say")
          const generalEmbed = new MessageEmbed()
          .setTitle('General Help')
          .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
          .addFields(
            {name: "`botinfo` :", value: `${botinfocommand.help.description}`},
            {name: "`help` : ", value: `${helpcommand.help.description}`},
            {name: "`invite` : ", value: `${invitecommand.help.description}`},
            {name: "`poll` : ", value: `${pollcommand.help.description}`},
            {name: "`say` : ", value: `${saycommand.help.description}`}
          )
          .setFooter("Dashboard : http://185.44.81.138:1196/")
         reactionMessage.edit(generalEmbed);
          break;

        case "🛠️":
          reaction.users.remove(user).catch(console.error);
          const bancommand = client.commands.get("ban")
          const kickcommand = client.commands.get("kick")
          const languagecommand = client.commands.get("language")
          const mutecommand = client.commands.get("mute")
          const purgecommand = client.commands.get("purge")
          const unbancommand = client.commands.get("unban")
          const unmutecommand = client.commands.get("unmute")
          const votekickcommand = client.commands.get("votekick")
          const modEmbed = new MessageEmbed()
          .setTitle('Moderation Help')
          .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
          .addFields(
            {name: "`ban` :", value: `${bancommand.help.description}`},
            {name: "`kick` : ", value: `${kickcommand.help.description}`},
            {name: "`language` : ", value: `${languagecommand.help.description}`},
            {name: "`mute` : ", value: `${mutecommand.help.description}`},
            {name: "`purge` : ", value: `${purgecommand.help.description}`},
            {name: "`unban` : ", value: `${unbancommand.help.description}`},
            {name: "`unmute` : ", value: `${unmutecommand.help.description}`},
            {name: "`votekick` : ", value: `${votekickcommand.help.description}`}
          )
          .setFooter("Dashboard : http://185.44.81.138:1196/")
         reactionMessage.edit(modEmbed);
          break;

        case "⚙️":
          reaction.users.remove(user).catch(console.error);
          const configdbcommand = client.commands.get("configdb")
          const evalcommand = client.commands.get("eval")
          const adminEmbed = new MessageEmbed()
          .setTitle('Admin Help')
          .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
          .addFields(
            {name: "`configdb` :", value: `${configdbcommand.help.description}`},
            {name: "`eval` : ", value: `${evalcommand.help.description}`}
          )
          .setFooter("Dashboard : http://185.44.81.138:1196/")
         reactionMessage.edit(adminEmbed);
          break;

        case "📰":
          reaction.users.remove(user).catch(console.error);
          const animecommand = client.commands.get("anime")
          const hmmmcommand = client.commands.get("hmmm")
          const memecommand = client.commands.get("meme")
          const reeditEmbed = new MessageEmbed()
          .setTitle('Meme Help')
          .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
          .addFields(
            {name: "`anime` :", value: `${animecommand.help.description}`},
            {name: "`hmmm` : ", value: `${hmmmcommand.help.description}`},
            {name: "`meme` : ", value: `${memecommand.help.description}`}
          )
          .setFooter("Dashboard : http://185.44.81.138:1196/")
         reactionMessage.edit(reeditEmbed);
          break;

        case "📈":
          reaction.users.remove(user).catch(console.error);
          const apexcommand = client.commands.get("apex")
          const fortnitecommand = client.commands.get("fortnite")
          const fortnitedevbuildcommand = client.commands.get("fortnitedevbuild")
          const statsEmbed = new MessageEmbed()
          .setTitle('Stats Help')
          .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
          .addFields(
            {name: "`apex` :", value: `${apexcommand.help.description}`},
            {name: "`fortnite` : ", value: `${fortnitecommand.help.description}`},
            {name: "`fortnitedevbuild` : ", value: `${fortnitedevbuildcommand.help.description}`}
          )
          .setFooter("Dashboard : http://185.44.81.138:1196/")
         reactionMessage.edit(statsEmbed);
          break;

        case "🏠":
          reaction.users.remove(user).catch(console.error);
          reactionMessage.edit(menuEmbed);
          break;

        case "🏠":
          reaction.users.remove(user).catch(console.error);
          const addxpcommand = client.commands.get("apex")
          const expcommand = client.commands.get("fortnite")
          const leaderboardcommand = client.commands.get("leaderboard")
          const levelcommand = client.commands.get("level")
          const removexpcommand = client.commands.get("removexp")
          const xpEmbed = new MessageEmbed()
          .setTitle('Admin Help')
          .setDescription("Réagissez en dessous pour accéder à la liste d'une catégorie.")
          .addFields(
            {name: "`addxp` :", value: `${addxpcommand.help.description}`},
            {name: "`exp` : ", value: `${expcommand.help.description}`},
            {name: "`leaderboard` : ", value: `${leaderboardcommand.help.description}`},
            {name: "`level` : ", value: `${levelcommand.help.description}`},
            {name: "`removexp` : ", value: `${removexpcommand.help.description}`}
          )
          .setFooter("Dashboard : http://185.44.81.138:1196/")
         reactionMessage.edit(xpEmbed);
          break;

        case "⏹":
          collector.stop();
          break;

        default:
          reaction.users.remove(user).catch(console.error);
          break;
      }
    });

    collector.on("end", () => {
      reactionMessage.delete().catch(console.error);
    });
    
  } else {
    message.delete();
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply(message.guild.language.commandNoExist);

    const embed = new MessageEmbed()
      .setColor("#36393F")
      .setTitle(`\`${command.help.name}\``)
      .addField("Description", `${command.help.description}`)
      .addField("Cooldown", `${command.help.cooldown}s`)
      .addField("Usage", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`, true)
      .setFooter(`Permission: ${command.help.permissions ? "Admin only" : "@everyone"}`)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    var infoMessage = await message.channel.send(embed)
    await infoMessage.react("⏹");

    const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = infoMessage.createReactionCollector(filter, {
      time: 600000
    });

    collector.on("collect", (reaction, user) => {
      const member = message.guild.member(user);
      switch (reaction.emoji.name) {
        case "⏹":
          reaction.users.remove(user).catch(console.error);
          collector.stop();
          break;

        default:
          reaction.users.remove(user).catch(console.error);
          break;
      }
    });

    collector.on("end", () => {
      infoMessage.delete().catch(console.error);
    });
  }
};

module.exports.help = {
  name: "help",
  aliases: ['help'],
  category: 'general',
  description: "🇫🇷 Renvoie une liste de commandes ou les informations sur une seule. \n🇬🇧 Send a list of all commands available or infos of only one.",
  cooldown: 3,
  usage: '<command_name>',
  isUserAdmin: false,
  permissions: false,
  args: false
}