const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client,message, args) {
  embed.setTitle("__Robo-Mod Help__")
  .setColor("#1E90FF")
  .setDescription("The prefix for Robo-Mod 2.0 (formerly Robot Moderation) is . For more help contact a member of staff.")
  .setThumbnail("https://something.com/blah.png")
  .addField("__General Commands__", "These commands can be used by anyone!")
  .addField(".help", "Displays this menu.")
  .addField(".about", "Displays some info about the bot.")
  .addField(".8ball [question]", "Just ask it!")
  .addField(".serverinfo", "Displays some technical server info.")
  .addField(".userinfo [user]", "Displays some info about the tagged user.")
  .addField(".avatar [user]", "Gets the avatar of the tagged user. TIP: Tag nobody then you will get your own avatar.")
  .addField(".ping", "Displays how long it took to ping the bot client.")
  .addField("__Staff commands__", "These commands can only be used by staff.")
  .addField(".strike [user] [reason]", "Allows you to warn a user.")
  .addField(".kick [user] [reason]", "Allows you to kick a user from the server.")
  .addField(".ban [user] [reason]", "Allows you to ban a user from the server.")
  .addField(".purge", "Allows staff to bulk delete messages.")
  .addField(".announce [announcement text]", "Allows you to announce somthing in an embed.")
  .addField(".r", "Allows you to reload specific commands.")
  message.author.send({embed});

  message.react("📬")
}
