module.exports.run = async (client, message) => {
    client.emit('guildMemberAdd', message.member);
}
  
module.exports.help = {
    name: "sim",
    aliases: [''],
    category: 'admin',
    description: "simule la creation de personnes dans le serveur mais t'es pas sencé savoir ce que c'est",
    cooldown: 0,
    isUserAdmin: false,
    permissions: false,
    args: false
}