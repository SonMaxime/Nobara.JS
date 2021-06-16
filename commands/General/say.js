module.exports.run = (client, message, args) => {
  message.delete();
  message.channel.send(args.join(" "));
};

module.exports.help = {
  name: "say",
  aliases: ['repeat', 'rep'],
  category: 'general',
  description: "🇫🇷Répéte le message d'un utilisateur. \n🇬🇧 Repeat the text of an user.",
  cooldown: 10,
  usage: '<votre_message>',
  isUserAdmin: false,
  permissions: true,
  args: true,
  inDev: false
}