const discordTTSFR = require('discord-tts-fr');

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
    const argsJoin = args.join(" ");
    const queue = message.client.queue.get(message.guild.id);
    if (queue) {
        message.delete();
        return message.reply('No possiblo, une musique est cours de lecture.').then(msg => { msg.delete({ timeout: 3000 }) })
    } else {
        message.delete();
        const broadcast = client.voice.createBroadcast();
        var channelId = message.member.voice.channelID;
        var channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTSFR.getVoiceStream(argsJoin));
            const dispatcher = connection.play(broadcast);
        });
    }
}

module.exports.help = {
    name: "tts",
    aliases: ['tts'],
    description: "test tts",
    cooldown: 3,
    usage: '<args>',
    isUserAdmin: false,
    permissions: false,
    args: true,
    inDev: false
}