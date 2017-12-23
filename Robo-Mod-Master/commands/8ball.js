exports.run = function(client, message, args) {
  const RichEmbed = require("discord.js").RichEmbed;

  var answers = [
    "Yes",
    "No",
    "Maybe :wink:",
    "Ask another time",
  ];
if (message.content.length >7) {
  let embed = new RichEmbed();
  embed.setTitle("8 Ball 🎱")
      .setColor("#1E90FF")
      .setDescription('8 Ball says: ' +answers[Math.floor(Math.random() * answers.length)])
  message.channel.send({embed});
  }
  else {
    let embed = new RichEmbed();
    embed.setTitle("❌8 Ball 🎱 Error")
         .setColor("#F20000")
         .setDescription("It seems you have got something wrong... ```You need to ask me a question.```")
    message.channel.send({embed});
  }
  }
