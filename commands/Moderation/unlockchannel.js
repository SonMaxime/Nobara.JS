module.exports.run = (client, message, args, settings, dbUser, economyData) => {
    message.delete();
    if (!client.lockit) client.lockit = [];
    message.channel.updateOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: true
    }).then(g => {
        g.edit({
            name: g.name
        })
        g.send(`${message.guild.language.unlockchannel.unlockedChannel}: ${message.author}`)
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