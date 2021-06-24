const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
      const { channel } = message.member.voice;
      const queue = message.client.queue.get(message.guild.id);
  
      if (!args.length) return message.reply("Usage: /clip <name>").catch(console.error);
      if (!channel) return message.reply(message.guild.language.clip.needVocal).catch(console.error);
  
      const queueConstruct = {
        textChannel: message.channel,
        channel,
        connection: null,
        songs: [],
        loop: false,
        volume: 100,
        playing: true
      };
  
      message.client.queue.set(message.guild.id, queueConstruct);
  
      try {
        if (args[0] === 'help') {
          const embed = new MessageEmbed()
          .setTitle('Sound meme help')
          .addFields(
            { name: 'deja-vu', inline: true },
            { name: 'dude', inline: true },
            { name: 'fbi', inline: true },
            { name: 'gaz', inline: true },
            { name: 'sardoche', inline: true },
            { name: 'triste', inline: true },
            { name: 'xp', inline: true }
          )

          message.channel.send(embed)
        } else {
          queueConstruct.connection = await channel.join();
          const dispatcher = queueConstruct.connection
          .play(`./sounds/${args[0]}.mp3`)
          .on("finish", () => {
            message.client.queue.delete(message.guild.id);
            channel.leave();
          })
          .on("error", err => {
            message.client.queue.delete(message.guild.id);
            channel.leave();
            console.error(err);
          })
        }
      } catch (error) {
        console.error(error);
    }
}

module.exports.help = {
  name: "clip",
  aliases: ['clip'],
  category: 'musique',
  description: "🇫🇷 Joue un meme dans un salon vocal. \n🇬🇧 Play a meme in a vocal channel.",
  cooldown: 3,
  usage: '<name of the meme>',
  isUserAdmin: false,
  permissions: false,
  args: false
}