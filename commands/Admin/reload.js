module.exports.run = async (message) => {
  await message.delete();
  await message.channel.send(message.guild.language.restartBot);
  process.exit();
};

module.exports.help = {
  name: "reload",
  aliases: ['rl'],
  category: 'admin',
  description: "",
  cooldown: 0,
  isUserAdmin: true,
  permissions: false,
  args: false
}