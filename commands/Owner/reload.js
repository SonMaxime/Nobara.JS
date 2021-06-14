module.exports.run = async (client, message, args, settings) => {
  if (message.author.id !== "492402867953467392") return;
  await message.delete();
  await message.channel.send(message.guild.language.restartBot);
  process.exit();
};

module.exports.help = {
  name: "reload",
  aliases: ['reload'],
  category: 'owner',
  description: "Relancer le bot.",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: true,
  args: false
}