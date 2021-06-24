module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");

  switch(getSetting) {
    case "prefix": {
      if (newSetting) {
        await client.updateGuild(message.guild, { prefix: newSetting });
        return message.channel.send(message.guild.language.configdb.prefix + `: \`${settings.prefix}\`-> \`${newSetting}\``);
      }
      break;
    }

    case "welcomeChannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, { welcomeChannel: newSetting });
        return message.channel.send(message.guild.language.configdb.welcomeChannel + `: \`${settings.welcomeChannel}\`-> \`${newSetting}\``);
      }
      break;
    }

    case "xpChannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, { xpChannel: newSetting });
        return message.channel.send(message.guild.language.configdb.xpChannel + `: \`${settings.xpChannel}\`-> \`${newSetting}\``);
      }
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
