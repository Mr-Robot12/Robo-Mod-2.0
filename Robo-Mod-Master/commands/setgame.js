exports.run = function(client, message, args) {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed();
  const embed2 = new Discord.RichEmbed();
  let text = message.content.split(/\s+/g).slice(1).join(" ");
  let staffRole = message.guild.roles.find("name", "Staff");

  if (!message.member.roles.has(staffRole.id)) {
        embed2.setTitle("❌Permission Error")
             .setColor("#F20000")
             .setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```")
        return message.channel.send({embed: embed2});
  } else {
client.user.setGame(text);

embed.setTitle('✅ Bot Game Changed')
     .setColor("#7CFC00")
     .setDescription('Game changed to: ```' + text + '```');
message.channel.send({embed});
console.log('Game set to: ' + text + ' by ' + message.author.username);
}};
