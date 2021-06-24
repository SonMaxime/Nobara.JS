module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  await message.delete();
  await message.channel.send(message.guild.language.reload.restartBot);
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
  args: false,
  inDev: false
}