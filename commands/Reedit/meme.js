const { MessageEmbed } = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports.run = async (client, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`de /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
}

module.exports.help = {
    name: "meme",
    aliases: ['meme'],
    category: 'reedit',
    description: "Envoie un meme depuis les subReedits me_irl, dankmeme et meme.",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}