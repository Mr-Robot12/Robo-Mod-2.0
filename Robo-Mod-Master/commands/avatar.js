const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client, message, args) {
  if(message.mentions.users.first()) {
     let user = message.mentions.users.first();
 	      embed.setTitle(`Avatar of ${user.username}`)
             .setColor("#1E90FF")
 	           .setImage(user.avatarURL)
 	      message.channel.send({embed});
  } else {
    embed.setTitle(`Avatar of ${message.author.username}`)
         .setColor("#1E90FF")
         .setImage(message.author.avatarURL)
   message.channel.send({embed});
  }
};
