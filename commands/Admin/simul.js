module.exports.run = async (client, message) => {
    client.emit('guildMemberAdd', message.member);
}
  
module.exports.help = {
    name: "sim",
    aliases: [''],
    category: 'admin',
    description: "",
    cooldown: 0,
    isUserAdmin: false,
    permissions: false,
    args: false
}