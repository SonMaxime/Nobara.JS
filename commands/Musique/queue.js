const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
    message.delete();
    const permissions = message.channel.permissionsFor(message.client.user);
    if (!permissions.has(["MANAGE_MESSAGES", "ADD_REACTIONS"]))
      return message.reply("il me manque des permitions au sujet de des réctions.")
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(message.guild.language.noQueue)
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);

    let currentPage = 0;
    const embeds = generateQueueEmbed(message, queue.songs);

    const queueEmbed = await message.channel.send(
      message.guild.language.actualPage + ` - ` + `${currentPage + 1}/${embeds.length}`,
      embeds[currentPage]
    );

    try {
      await queueEmbed.react("⬅️");
      await queueEmbed.react("⏹");
      await queueEmbed.react("➡️");
    } catch (error) {
      console.error(error);
      message.channel.send(error.message)
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);
    }

    const filter = (reaction, user) =>
      ["⬅️", "⏹", "➡️"].includes(reaction.emoji.name) && message.author.id === user.id;
    const collector = queueEmbed.createReactionCollector(filter, { time: 60000 });

    collector.on("collect", async (reaction, user) => {
      try {
        if (reaction.emoji.name === "➡️") {
          if (currentPage < embeds.length - 1) {
            currentPage++;
            queueEmbed.edit(message.guild.language.actualPage + ` - ` + `${currentPage + 1}/${embeds.length}`, embeds[currentPage]);
          }
        } else if (reaction.emoji.name === "⬅️") {
          if (currentPage !== 0) {
            --currentPage;
            queueEmbed.edit(message.guild.language.actualPage + ` - ` + `${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
          }
        } else {
          collector.stop();
          reaction.message.reactions.removeAll();
        }
        await reaction.users.remove(message.author.id);
      } catch (error) {
        console.error(error);
        return message.channel.send(error.message)
        .then(msg => {
          msg.delete({ timeout: 10000 })
        })
        .catch(console.error);
      }
    });
  }

function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;

  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;

    const info = current.map((track) => `${++j} - [${track.title}](${track.url})`).join("\n");

    const embed = new MessageEmbed()
      .setTitle("Song Queue\n")
      .setThumbnail(message.guild.iconURL())
      .setColor("#F8AA2A")
      .setDescription(message.guild.language.playingNow + `[${queue[0].title}](${queue[0].url})**\n\n${info}`)
      .setTimestamp();
    embeds.push(embed);
  }

  return embeds;
}

module.exports.help = {
  name: "queue",
  aliases: ['q'],
  description: "🇫🇷 Montre la file d'attente actuelle et le son joué actuellement. \n🇬🇧 Show the actual queue and the song played.",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}