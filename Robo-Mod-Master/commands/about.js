const Discord = require("discord.js");
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed();

    embed.setTitle("About Robot Moderation 2.0")
    .setColor("#1E90FF")
    .setThumbnail("https://somthing.com/somthing.png")
    .addField("General", "Robot Moderation 2.0 is a remake of Robot Moderation. It was recoded by Ethan for the Mr Robot Community 2.0 Server.")
    .addField("About the Server", "Mr Robot Community 2.0 is a new and improved version of Mr Robot Community. The server is owned by Mr Robot.")
    .addField("Website", "[Mr Robot Community Website](https://mrrobotcommunity.tk)")
    .addField("Inspiration", "I took inspiration of features from other bots so I want to credit them: Poni, JaffaLogs and of course Robot Moderation")
    .setFooter(`Robot Moderation 2.0 | V 1.0 | MRC`,`https://cdn.discordapp.com/avatars/346704840673722382/51e75c89bde4f5bdff5ac4de92601b24.png`)
    message.channel.send({embed});
  }
