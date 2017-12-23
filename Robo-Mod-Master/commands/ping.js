const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client, message, args) {
  embed.setTitle("Client ping")
    .setColor("#1E90FF")
    .setDescription(`Our ping is ${Math.floor(client.ping)}ms.`)
  message.channel.send({embed});
    message.react("🏓")
}
