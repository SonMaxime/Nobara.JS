const { canModifyQueue } = require("./../../util/util");

module.exports.run = (client, message, args, settings) => {
    message.delete();
    if (!args.length || isNaN(args[0]))
      return message
        .reply(`Usage: ${message.client.prefix}${module.exports.name} <Queue Number>`)
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
    if (!canModifyQueue(message.member)) return;
    if (args[0] > queue.songs.length)
      return message.reply(message.guild.language.onlyQueueNumber + ` ${queue.songs.length} ` + message.guild.language.inTheQueue)
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }

    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ has skip ${args[0] - 1} songs.`)
    .then(msg => {
    msg.delete({ timeout: 3000 })
  })
  .catch(console.error);
}

module.exports.help = {
  name: "skipto",
  aliases: ['sk'],
  description: "🇫🇷 Skip jusqu'au numéro du son de la file d'attente. \n🇬🇧 Skip to the number of the song in the queue.",
  cooldown: 3,
  usage: '<Queue Number>',
  isUserAdmin: false,
  permissions: false,
  args: true
}