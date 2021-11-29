const { play } = require('../../util/play');
const scdl = require("soundcloud-downloader").default;
const https = require("https");
const { SOUNDCLOUD_CLIENT_ID, DEFAULT_VOLUME } = require("./../../util/util");

module.exports.run = async (client, message, args) => {
  message.delete();
  const { channel } = message.member.voice;

  const serverQueue = message.client.queue.get(message.guild.id);
  if (!channel) return message.reply({ content: message.guild.language.play.needVocal, allowedMentions: { repliedUser: true }})
  .then(msg => {
    msg.delete({ timeout: 3000 })
  })
  .catch(console.error);
  if (serverQueue && channel !== message.guild.me.voice.channel)
    return message.reply({ content: message.guild.language.play.sameVocal + ` ${message.client.user}`, allowedMentions: { repliedUser: true }})
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);

  const permissions = channel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT"))
    return message.reply("nope")
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);
  if (!permissions.has("SPEAK"))
    return message.reply("nope")
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);

  const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
  const mobileScRegex = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
  const url = args[0];
  const urlValid = videoPattern.test(args[0]);

  if (scdl.isValidUrl(url) && url.includes("/sets/")) {
    return message.client.commands.get("playlist").run(client, message, args)
  }

  if (mobileScRegex.test(url)) {
    try {
      https.get(url, function (res) {
        if (res.statusCode == "302") {
          return message.client.commands.get("play").run(client, message, [res.headers.location]);
        } else {
          return message.reply({ content: message.guild.language.play.urlNoFound, allowedMentions: { repliedUser: true }})
          .then(msg => {
            msg.delete({ timeout: 3000 })
          })
          .catch(console.error);
        }
      });
    } catch (error) {
      console.error(error);
      return message.reply({ content: error.message, allowedMentions: { repliedUser: true }}).catch(console.error);
    }
    return message.reply({ content: "url redirection...", allowedMentions: { repliedUser: true }})
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);
  }

  const queueConstruct = {
    textChannel: message.channel,
    channel,
    connection: null,
    songs: [],
    loop: false,
    volume: DEFAULT_VOLUME || 100,
    playing: true
  };

  let song = null;

  if (urlValid) {
    return;
  } else if (scRegex.test(url)) {
    try {
      const trackInfo = await scdl.getInfo(url, SOUNDCLOUD_CLIENT_ID);
      song = {
        title: trackInfo.title,
        url: trackInfo.permalink_url,
        duration: Math.ceil(trackInfo.duration / 1000)
      };
    } catch (error) {
      console.error(error);
      return message.reply({ content: error.message, allowedMentions: { repliedUser: true }}).catch(console.error);
    }
  }

  if (serverQueue) {
    serverQueue.songs.push(song);
    return serverQueue.textChannel
      .send(`✅ **${song.title}**` + message.guild.language.play.hasBeenAdded + `${message.author}`)
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);
  }

  queueConstruct.songs.push(song);
  message.client.queue.set(message.guild.id, queueConstruct);

  try {
    queueConstruct.connection = await channel.join();
    await queueConstruct.connection.voice.setSelfDeaf(true);
    play(queueConstruct.songs[0], message);
  } catch (error) {
    console.error(error);
    message.client.queue.delete(message.guild.id);
    await channel.leave();
    return message.channel.send(message.guild.language.play.cantJoin + `${error}`)
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);
  }
}

module.exports.help = {
  name: "play",
  aliases: ['p'],
  description: "🇫🇷 Joue un son depuis Soundcloud. \n🇬🇧 Play a song from SoundCloud.",
  cooldown: 3,
  usage: '<Soundcloud URL>',
  isUserAdmin: false,
  permissions: false,
  args: true
}