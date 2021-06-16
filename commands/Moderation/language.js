const fs = require("fs");

module.exports.run = async (client, message, args, settings) => {
    let lang = args[0];

    if (!lang) return await message.channel.send(message.guild.language.specify_language);

    let languages = fs.readdirSync("./locales/")
        .filter(file => file.endsWith(".json"))
        .map(file => file.replace(".json", ""));
        
    if (!languages.includes(lang)) return await message.channel
        .send(message.guild.language.specify_valid_language.replace(/{languages}/g, languages.join(", ")));

    client.db.set(`${message.guild.id}.language`, lang);
    message.guild.language = require(`../../locales/${lang}.json`);
    await message.channel.send(message.guild.language.language_updated);
}

module.exports.help = {
    name: "language",
    aliases: ['lang'],
    category: 'moderation',
    description: "🇫🇷 Changer de langue sur un serveur. \n🇬🇧 Change language of a guild.",
    cooldown: 10,
    usage: '.lang fr/en',
    isUserAdmin: false,
    permissions: true,
    args: false,
    inDev: false
}