module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");

  switch(getSetting) {
    case "prefix": {
      if (newSetting) {
        await client.updateGuild(message.guild, { prefix: newSetting });
        return message.channel.send(message.guild.language.prefix + `: \`${settings.prefix}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.prefixActual + `: \`${settings.prefix}\``);
      break;
    }
  }
};

module.exports.help = {
  name: "configdb",
  aliases: ['configdb'],
  category: 'admin',
  description: "🇫🇷 Modifier la base de données (prefix). \n🇬🇧 Modify the database (prefix).",
  cooldown: 3,
  usage: 'prefix <value>',
  isUserAdmin: false,
  permissions: true,
  args: true,
  inDev: false
}
