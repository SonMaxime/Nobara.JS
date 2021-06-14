const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply(message.guild.language.specifyNumberBetweenOneAnd100);

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  message.delete();
  await message.channel.bulkDelete(messages).catch(console.error);
};

module.exports.help = {
  name: "purge",
  aliases: ['purge'],
  category: 'moderation',
  description: "🇫🇷 Purge un nombre de message spécifié. \n🇬🇧 Purge a specific number of messages.",
  cooldown: 10,
  usage: '<nbr_messages> (100 limit + only messages from 14 days ago.)',
  isUserAdmin: false,
  permissions: true,
  args: true
}