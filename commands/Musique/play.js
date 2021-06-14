const { play } = require("./../../include/play");
const ytdl = require("ytdl-core");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const https = require("https");
const { SOUNDCLOUD_CLIENT_ID, DEFAULT_VOLUME } = require("./../../util/util");
const youtube = new YouTubeAPI("AIzaSyAhPLtjqee-H0lINdBEP5a_2rO6UuRtICM");

module.exports.run = async (client, message, args, settings) => {
    message.delete();
    const { channel } = message.member.voice;

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!channel) return message.reply(message.guild.language.needVocal)
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message.reply(message.guild.language.sameVocal + ` ${message.client.user}`)
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

    const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
    const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
    const mobileScRegex = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
    const url = args[0];
    const urlValid = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.client.commands.get("playlist").run(client, message, args);
    } else if (scdl.isValidUrl(url) && url.includes("/sets/")) {
      return message.client.commands.get("playlist").run(client, message, args);
    }

    if (mobileScRegex.test(url)) {
      try {
        https.get(url, function (res) {
          if (res.statusCode == "302") {
            return message.client.commands.get("play").run(client, message, [res.headers.location]);
          } else {
            return message.reply(message.guild.language.urlNoFound)
            .then(msg => {
              msg.delete({ timeout: 3000 })
            })
            .catch(console.error);
          }
        });
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
      return message.reply("url redirection...")
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

    let songInfo = null;
    let song = null;

    if (urlValid) {
      try {
        songInfo = await ytdl.getInfo(url);
        song = {
          title: songInfo.videoDetails.title,
          id: songInfo.videoDetails.videoId,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
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
        return message.reply(error.message).catch(console.error);
      }
    } else {
      try {
        const results = await youtube.searchVideos(search, 1);
        songInfo = await ytdl.getInfo(results[0].url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          id: songInfo.videoDetails.videoId,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    }

    if (serverQueue) {
      serverQueue.songs.push(song);
      return serverQueue.textChannel
        .send(`✅ **${song.title}**` + message.guild.language.hasBeenAdded + `${message.author}`)
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
      return message.channel.send(message.guild.language.cantJoin + `${error}`)
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);
    }
  }

module.exports.help = {
  name: "play",
  aliases: ['p'],
  description: "🇫🇷 Joue un son depuis YouTube ou Soundcloud. \n🇬🇧 Play a song from YT or SoundCloud.",
  cooldown: 3,
  usage: '<YouTube URL | Nom de la video | Soundcloud URL>',
  isUserAdmin: false,
  permissions: false,
  args: true
}