const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle("**Patch Note**\nv1.5.0")
      .setDescription(
        "```diff\n+ Amélioration de la traduction, ajout de la commande fortnitedevbuild et modification du comportement help.```"
      )
      .setFooter("Mis à jour le 1/01/2021 PDT")
      .setColor(0xffa500);
    message.channel.send(embed);
};

module.exports.help = {
  name: "patchnote",
  aliases: ['pn'],
  category: 'admin',
  description: "",
  cooldown: 0,
  isUserAdmin: true,
  permissions: false,
  args: false
}