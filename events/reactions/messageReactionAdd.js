module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '715497502937448470');
  const twitterRole = message.guild.roles.cache.get("715498418230788126");
  const notifsRole = message.guild.roles.cache.get("715498459108737094");
  const verifRole = message.guild.roles.cache.get("715493386689314907");
  if (member.user.bot) return;

  if (["twitter", "notifs", "verify"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case "twitter":
        member.roles.add(twitterRole);
        break;
      case "notifs":
        member.roles.add(notifsRole);
        break;
      case "verify":
        member.roles.add(verifRole);
        break;
    };
  };
}