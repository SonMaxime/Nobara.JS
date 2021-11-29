const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args, settings, dbUser, economyData) => {
    const replies = [message.guild.language.eightball.yes, message.guild.language.eightball.no, message.guild.language.eightball.maybe, message.guild.language.eightball.miskina, message.guild.language.ptdr, message.guild.language.eightball.quelPlaisir]
    const question = args.join(" ");
    const responce = Math.floor(Math.random() * replies.length);

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#36393F")
    .addField(question, replies[responce])

    message.channel.send({ embeds: [embed] });
};

module.exports.help = {
    name: "8ball",
    aliases: ['8', '8b'],
    category: 'fun',
    description: "🇫🇷 Mystère et boule de gomme... \n🇬🇧 Mystery...",
    cooldown: 10,
    usage: "<question>",
    isUserAdmin: false,
    permissions: false,
    args: true,
    inDev: false
}