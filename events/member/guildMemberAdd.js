const { MessageAttachment } = require("discord.js");
const Welcome = require('./../../models/welcome');
const Canvas = require('canvas');
const path = require('path');

module.exports = async (client, member) => {
  const { guild } = member

  const canvas = Canvas.createCanvas(1895, 981);
  const ctx = canvas.getContext('2d');
  const textSettings = canvas.getContext('2d');

  const background = await Canvas.loadImage(
    path.join(__dirname, "./../../addons/background.png")
  )

  let x = 0;
  let y = 0;
  ctx.drawImage(background, x, y);

  textSettings.fillStyle = '#ffffff'
  textSettings.font = '50px sans-serif'
  let text = `${member.user.tag}`
  x = canvas.width / 2 - textSettings.measureText(text).width / 2
  textSettings.fillText(text, x, 120)

  textSettings.font = '48px sans-serif'
  textSettings.fillStyle = '#ffffff'
  text = `U are the #${guild.memberCount} member.`
  x = canvas.width / 2 - textSettings.measureText(text).width / 2
  textSettings.fillText(text, x, 170)

  textSettings.font = '50px sans-serif'
  textSettings.fillStyle = '#ffffff'
  text = `Welcome to the server. Don't forget to read the rules.`
  x = canvas.width / 2 - textSettings.measureText(text).width / 2
  textSettings.fillText(text, x, 850)

  const pfp = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: 'png', size: 512 })
  )
  x = canvas.width / 2.1678 - pfp.width / 3;
  y = 232.5
  const iconRadius = 212
  const iconWidth = iconRadius * 2
  const iconHeight = iconRadius * 2
  ctx.beginPath();  
  ctx.arc(x + iconRadius, y + iconRadius, iconRadius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.clip();
  ctx.drawImage(pfp, x, y, iconWidth, iconHeight);

  const attachment = new MessageAttachment(canvas.toBuffer())

  Welcome.findOne({ guildID: member.guild.id }, async (err, data) => {
    if (!data) {
      return;
    } else {
      const user = member.user;
      const channel = member.guild.channels.cache.get(data.channelID);

      channel.send(`Welcome ${user}`, attachment)
    }
  });

  await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag
  });
}