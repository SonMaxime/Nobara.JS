const createBar = require("string-progressbar");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
    message.delete();
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return;

    const song = queue.songs[0];
    const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    const left = song.duration - seek;

    let nowPlaying = new MessageEmbed()
      .setTitle("Now playing")
      .setDescription(`${song.title}\n${song.url}`)
      .setColor("#F8AA2A")
      .setAuthor(message.client.user.username);

    if (song.duration > 0) {
      nowPlaying.addField(
        "\u200b",
        new Date(seek * 1000).toISOString().substr(11, 8) +
          "[" +
          createBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] +
          "]" +
          (song.duration == 0 ? " ◉ LIVE" : new Date(song.duration * 1000).toISOString().substr(11, 8)),
        false
      );
      nowPlaying.setFooter(message.guild.language.timeRimain + new Date(left * 1000).toISOString().substr(11, 8));
    }

    return message.channel.send(nowPlaying)
    .then(msg => {
      msg.delete({ timeout: 5500 })
    })
    .catch(console.error);
}

module.exports.help = {
  name: "nowplaying",
  aliases: ['np'],
  description: "🇫🇷 Montre le son joué actuellement. \n🇬🇧 Display the song played.",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}