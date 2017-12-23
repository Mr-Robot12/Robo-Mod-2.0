exports.run = (client, message, args) => {

  let staffRole = message.guild.roles.find("name", "Staff");
  let text = message.content.split(/\s+/g).slice(1).join(" ");
  if (!message.member.roles.has(staffRole.id)) {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed();
        embed.setTitle("❌Permission Error")
             .setColor("#F20000")
             .setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```")
        return message.channel.send({embed: embed2});
  } else {
    message.guild.members.get(client.user.id).setNickname(text);
const Discord = require("discord.js");
const embed = new Discord.RichEmbed();
  embed.setTitle('✅ Bot Nickname Changed')
     .setColor("#7CFC00")
     .setDescription('Nickname changed to: ```' + text + '```');
  message.channel.send({embed});
  console.log('Nick set to: ' + text + ' by ' + message.author.username);
  }};
