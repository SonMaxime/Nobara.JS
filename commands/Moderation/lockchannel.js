module.exports.run = (client, message) => {
    message.delete();
    if (!client.lockit) client.lockit = [];
    message.channel.updateOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: false
    }).then(g => {
        g.edit({
            name: ' 🔒' + g.name
        })
        g.send(`🔒 | Le salon a été bloqué par ${message.author}`)
    })
};

module.exports.help = {
  name: "lockchannel",
  aliases: ['lc'],
  category: 'moderation',
  description: "🇫🇷 PLACEHOLDER. \n🇬🇧 PLACEHOLER",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: true
}