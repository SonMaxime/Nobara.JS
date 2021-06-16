const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
     const embed = new MessageEmbed()
     .setColor('BLACK')
     .setDescription(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
     message.channel.send(embed);
}

module.exports.help = {
     name: "invite", 
     aliases: ['invite'],
     category: 'general',
     description: "🇫🇷 Crée un lien pour inviter le bot dans votre serveur. \n🇬🇧 Create a invite link for the bot.",
     cooldown: 120,
     usage: '',
     isUserAdmin: false,
     permissions: false,
     args: false,
     inDev: false
}