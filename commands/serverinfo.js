const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	guild = message.guild;
	embed.setTitle(`__Server Info for ${guild.name}__`)
	.setColor("#1E90FF")
	.addField("Server Name:", guild.name)
	.addField("Member Count:", guild.memberCount)
	.addField("Server ID:", guild.id)
	.addField("Server Owner:", guild.owner)
	.addField("Server Region:", guild.region)
	.addField("Created:", guild.createdAt)
	.setThumbnail(guild.iconURL)
	message.channel.send({embed});
}
