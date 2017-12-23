exports.run = function(client, message, args) {
  const Discord = require("discord.js");

  let muted = message.guild.roles.find("name", "Muted");
  let member = message.mentions.members.first();

  if (!message.member.hasPermission("KICK_MEMBERS")) {
    let embed = new Discord.RichEmbed();
    embed.setTitle("❌ Permission Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```")
    return message.channel.send({embed});
  }
if (message.member.roles.has(muted.id)) {
    const embed = new Discord.RichEmbed();
      embed.setTitle("❌Error")
           .setColor("#F20000")
           .setDescription("It seems you have got something wrong... ```This user isn't muted.```")
      return message.channel.send({embed});
} else {
  const embed = new Discord.RichEmbed();

  embed.setTitle("✅ User Un-Muted")
  .setColor("#7CFC00")
  .setDescription(`${member} has been un-muted.`)

  message.channel.send({embed});
  member.removeRole(muted).catch(console.error);

}};
