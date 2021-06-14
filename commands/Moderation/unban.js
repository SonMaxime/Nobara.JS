const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
  let user = await client.users.fetch(args[0]);
  if (!user) return message.reply(message.guild.language.userNoExist);
  message.guild.members.unban(user);
};

module.exports.help = {
  name: "unban",
  aliases: ['unban'],
  category: 'moderation',
  description: "🇫🇷 Unban un utilisateur. \n🇬🇧 Unban a user.",
  cooldown: 10,
  usage: '<user_id>',
  isUserAdmin: false,
  permissions: true,
  args: true
}