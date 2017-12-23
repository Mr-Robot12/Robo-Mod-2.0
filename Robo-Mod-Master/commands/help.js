const Discord = require("discord.js");
const embed = new Discord.RichEmbed();

exports.run = function(client,message, args) {
  const embed = new Discord.RichEmbed();
  embed.setTitle("__Robo-Mod Help__")
  .setColor("#1E90FF")
  .setDescription("The prefix for Robo-Mod 2.0 (formerly Robot Moderation) is . For more help contact a member of staff.")
  .setThumbnail("https://something.com/blah.png")
  .addField("__General Commands__", "These commands can be used by anyone!")
  .addField(".help", "Displays this menu.")
  .addField(".about", "Displays some info about the bot.")
  .addField(".agree", "Allows a new user to get the member role. [ONLY FOR NEW MEMBERS]")
  .addField(".8ball [question]", "Just ask it!")
  .addField(".gay", "Tells the user what % gay they are!")
  .addField(".serverinfo", "Displays some technical server info.")
  .addField(".userinfo [user]", "Displays some info about the tagged user.")
  .addField(".avatar [user]", "Gets the avatar of the tagged user. TIP: Tag nobody then you will get your own avatar.")
  .addField(".ping", "Displays how long it took to ping the bot client.")
  .addField(".yts [search subject]", "Allows the user to search for item on YouTube")
  .addField(".ddg [search subject]", "Allows user to search DuckDuckGo (WIP)")
  .addField(".urban [search subject]", "Allows user to search Urban Dictionary")
  .addField("__Staff commands__", "These commands can only be used by staff.")
  .addField(".strike [user] [reason]", "Allows you to warn a user.")
  .addField(".kick [user] [reason]", "Allows you to kick a user from the server.")
  .addField(".ban [user] [reason]", "Allows you to ban a user from the server.")
  .addField(".purge", "Allows staff to bulk delete messages.")
  .addField(".announce [announcement text]", "Allows you to announce somthing in an embed.")
  .addField(".r", "Allows you to reload specific commands. [Owner Only]")
  .setFooter(`Robot Moderation 2.0 | V 1.0 | MRC`,`https://cdn.discordapp.com/avatars/346704840673722382/51e75c89bde4f5bdff5ac4de92601b24.png`)
  message.author.send({embed});

  message.react("📬")
}
