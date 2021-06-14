module.exports.run = async (client, message, args, settings) => {
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
    case "logChannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, { logChannel: newSetting });
        return message.channel.send(message.guild.language.logChannel + `: \`${settings.logChannel}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.logChannelActual + `: \`${settings.logChannel}\``);
      break;
    }
    case "welcomeMessage": {
      if (newSetting) {
        await client.updateGuild(message.guild, { welcomeMessage: newSetting });
        return message.channel.send(message.guild.language.welcomeMessage + `: \`${settings.welcomeMessage}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.welcomeMessageActual + `: \`${settings.welcomeMessage}\``);
      break;
    }
    case "welcomeChannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, { welcomeChannel: newSetting });
        return message.channel.send(message.guild.language.welcomeChannel + `: \`${settings.welcomeChannel}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.welcomeChannelActual + `: \`${settings.welcomeChannel}\``);
      break;
    }
    case "leaveMessage": {
      if (newSetting) {
        await client.updateGuild(message.guild, { leaveMessage: newSetting });
        return message.channel.send(message.guild.language.leaveMessage + `: \`${settings.leaveMessage}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.leaveMessageActual + `: \`${settings.leaveMessage}\``);
      break;
    }
  }
};

module.exports.help = {
  name: "configdb",
  aliases: ['configdb'],
  category: 'admin',
  description: "Modifier la base de données (prefix, welcomeMessage et logChannel)",
  cooldown: 3,
  usage: '<key> <value>',
  isUserAdmin: false,
  permissions: true,
  args: true
}
