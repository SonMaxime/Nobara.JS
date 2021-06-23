const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings, dbUser, economyData) => {
  message.delete();

  const cible = message.mentions.users.first() || message.guild.users.cache.get(args[0]);
  if (!cible) return message.channel.send(`${message.guild.language.provideExistUser}`)

  let mensagem = args.slice(1).join(' ')
  if (!mensagem) return message.channel.send(`${message.guild.language.mentionBeforeText}`)

  let avatar = cible.displayAvatarURL({ dynamic: true });
  message.channel.createWebhook(cible.username, { avatar: avatar }).then(webhook => {
    webhook.send(mensagem)
  })
};

module.exports.help = {
  name: "fakesay",
  aliases: ['fs'],
  category: 'fun',
  description: "🇫🇷 Simule l'envoi d'un message de la part d'un utilisateur. \n🇬🇧 Simulates sending a message from a user.",
  cooldown: 20,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: false
}