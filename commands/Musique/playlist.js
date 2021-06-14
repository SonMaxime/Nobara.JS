const { MessageEmbed } = require("discord.js");
const { play } = require("./../../include/play");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const { YOUTUBE_API_KEY, SOUNDCLOUD_CLIENT_ID, MAX_PLAYLIST_SIZE, DEFAULT_VOLUME } = require("./../../util/util");
const youtube = new YouTubeAPI("AIzaSyAhPLtjqee-H0lINdBEP5a_2rO6UuRtICM");

module.exports.run = async (client, message, args, settings) => {
    const { channel } = message.member.voice;
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!channel) return message.reply(message.guild.language.needVocal)
    .then(msg => {
      msg.delete(3000)
    })
    .catch(console.error);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.reply("Je ne peux pas rejoindre le salon, je manque de permissions.")
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);
    if (!permissions.has("SPEAK"))
      return message.reply("Je ne peux pas parler dans le salon. Veuillez faire attention à ce que j'ai les permissions appropriés")
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);

    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message.reply(message.guild.language.sameVocal + `${message.client.user}`)
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);

    const search = args.join(" ");
    const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const url = args[0];
    const urlValid = pattern.test(args[0]);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: DEFAULT_VOLUME || 100,
      playing: true
    };

    let playlist = null;
    let videos = [];

    if (urlValid) {
      try {
        playlist = await youtube.getPlaylist(url, { part: "snippet" });
        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
      } catch (error) {
        console.error(error);
        return message.reply(message.guild.language.playlistNotFound)
        .then(msg => {
          msg.delete({ timeout: 3000 })
        })
        .catch(console.error);
      }
    } else if (scdl.isValidUrl(args[0])) {
      if (args[0].includes("/sets/")) {
        message.channel.send("⌛ fetching the playlist...")
        .then(msg => {
          msg.delete({ timeout: 3000 })
        })
        .catch(console.error);
        playlist = await scdl.getSetInfo(args[0], SOUNDCLOUD_CLIENT_ID);
        videos = playlist.tracks.map((track) => ({
          title: track.title,
          url: track.permalink_url,
          duration: track.duration / 1000
        }));
      }
    } else {
      try {
        const results = await youtube.searchPlaylists(search, 1, { part: "snippet" });
        playlist = results[0];
        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    }

    const newSongs = videos.map((video) => {
      return (song = {
        title: video.title,
        id: video.id,
        url: video.url,
        duration: video.durationSeconds
      });
    });

    serverQueue ? serverQueue.songs.push(...newSongs) : queueConstruct.songs.push(...newSongs);
    const songs = serverQueue ? serverQueue.songs : queueConstruct.songs;

    let playlistEmbed = new MessageEmbed()
      .setTitle(`${playlist.title}`)
      .setDescription(songs.map((song, index) => `${index + 1}. ${song.title}`))
      .setURL(playlist.url)
      .setColor("#F8AA2A")
      .setTimestamp();

    if (playlistEmbed.description.length >= 2048)
      playlistEmbed.description =
        playlistEmbed.description.substr(0, 2007) + message.guild.language.playlistTooLong;

    message.channel.send(`${message.author} ` + message.guild.language.startedPlaylist, playlistEmbed)
    .then(msg => {
      msg.delete({ timeout: 10000 })
    })
    .catch(console.error);

    if (!serverQueue) {
      message.client.queue.set(message.guild.id, queueConstruct);

      try {
        queueConstruct.connection = await channel.join();
        await queueConstruct.connection.voice.setSelfDeaf(true);
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(error);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(message.guild.language.cantJoin + ` ${error.message}`)
        .then(msg => {
          msg.delete({ timeout: 3000 })
        })
        .catch(console.error);
      }
    }
  }

module.exports.help = {
  name: "playlist",
  aliases: ['pl'],
  description: "🇫🇷 Joue une playlist depuis YouTube. \n🇬🇧 Play a playlist from YT.",
  cooldown: 3,
  usage: '<YouTube Playlist URL | Playlist Name>',
  isUserAdmin: false,
  permissions: false,
  args: true
}