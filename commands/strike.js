exports.run = function(client, message, args) {
  const RichEmbed = require("discord.js").RichEmbed;
  const logs = client.channels.get("381762241931771904");

  let member = message.mentions.members.first();
  let reason = message.content.split(/\s+/g).slice(2).join(" ");
  var guild = message.guild;

  if(message.mentions.users.size === 0) {
    let embed = new RichEmbed();
    embed.setTitle("❌ Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```Please mention a user to strike.```")
    return message.channel.send({embed});
  }

  if(message.mentions.users.size > 1) {
    let embed = new RichEmbed();
    embed1.setTitle("❌ Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```You can only mention 1 user to strike at a time.```")
    return message.channel.send({embed: embed1});
  }

  if(reason.length === 0) {
    let embed = new RichEmbed();
    embed.setTitle("❌ Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```You need to add a reason for the user to be stricken.```")
    return message.channel.send({embed});
  }

  if (!message.member.hasPermission("KICK_MEMBERS")) {
    let embed = new RichEmbed();
    embed.setTitle("❌ Permission Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```")
    return message.channel.send({embed});
  }

  let embed = new RichEmbed();
  embed.setTitle("✅ User Striken")
  .setColor("#7CFC00")
  .setDescription(`${member} has been stricken for ${reason}`)
  message.channel.send({embed});

  embed.setTitle("User Striken")
  .setColor("#FFD700")
  .setDescription(`${member} was stricken by ${message.author} for ${reason}`)
  logs.send({embed});

  embed.setTitle("You've been stricken.")
  .setColor("#FFD700")
  .setDescription(`You have been stricken in ${guild.name} by ${message.author} for ${reason}.`)
 message.mentions.members.first().send({embed});
}
