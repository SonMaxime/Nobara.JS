const { MessageEmbed } = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports.run = async (client, message, args) => {
    const subReddits = ["hmmm"];
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
    name: "hmmm",
    aliases: ['hmmm'],
    category: 'reedit',
    description: "🇫🇷 Envoie un hmmm depuis le subReedit :/r/hmmm. \n🇬🇧 Send a meme from the ''hmmm'' subReedit.",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
    inDev: false
}