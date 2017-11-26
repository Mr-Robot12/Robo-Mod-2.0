exports.run = function(client, message, args) {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed();
  const embed1 = new Discord.RichEmbed();
  let role = message.guild.roles.find("name", "Member");
  let member = message.member

  if (message.member.roles.has(role)){
    embed.setTitle("❌ Permission Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```You have already agreed to the rules.```")
  return message.channel.send({embed});
}
else {
  member.addRole(role).catch(console.error);

console.log('User: ' + member.user.username + '  joined the server')

const logs = member.guild.channels.find('name' ,"logs");
const main = member.guild.channels.find('name', 'mainchat');

  embed.setTitle("New member!")
  .setDescription(`${member} joined the server.`)
  .setColor("#1E90FF")
  main.send({embed});

  embed1.setTitle("Member Joined")
  .setColor("#1E90FF")
  .setDescription(`${member} joined the server`)
  logs.send({embed: embed1});
  message.delete()

}};
