const Discord = require("discord.js");
const embed = new Discord.RichEmbed();
const embed1 = new Discord.RichEmbed();
exports.run = function(client, message, args) {

  embed.setTitle("❌ Permission Error")
      .setColor("#F20000")
      .setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```")
  if (!message.member.hasPermission("MENTION_EVERYONE"))
  return message.channel.send({embed});

  let text = message.content.split(/\s+/g).slice(1).join(" ");
  console.log(text);
  embed1.setTitle(``)
    .setAuthor(`${message.author.tag}`)
    .setColor("#1E90FF")
    .setThumbnail(`${message.author.avatarURL}`)
    .setDescription("\n" + text)
  message.channel.send({embed: embed1});
  message.delete()
}
