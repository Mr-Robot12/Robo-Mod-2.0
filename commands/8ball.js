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
    embed.setTitle("8 Ball 🎱")
        .setColor("#1E90FF")
        .setDescription('8 Ball says: Remember to ask a question.')
    message.channel.send({embed});
  }
  }
