const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	guild = message.guild;
	embed.setTitle(`Server Info for ${guild.name}`)
	.setDescription(`Here is some info I found about ${guild.name}`)
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
