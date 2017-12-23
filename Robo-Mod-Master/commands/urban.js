exports.run = (client, message, args) => {
const ud = require('urban-dictionary')
  let text = message.content.split(/\s+/g).slice(1).join(" ");

var definition = text

ud.term(definition, function (error, entries, tags, sounds) {
  if (error) {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed();
    embed.setTitle("❌Urban Dictionary Search Error")
         .setColor("#F20000")
         .setDescription("It seems you have got something wrong... ```Sorry, I couldn't find any results for: " + text + "```")
return   message.channel.send({embed})
  }
  if (message.content.length >6) {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed();
    embed.setTitle(`Urban Dictionary Definition for: ${text}`)
    .setDescription('Here is the Urban Dictionary result for your search.')
    .setThumbnail('https://jurispage.com/wp-content/uploads/sites/337/2013/05/featured-image4.jpg')
    .setColor('#1E90FF')
    .addField('Word Defined:', `${entries[0].word}`)
    .addField('Definition: ', `${entries[0].definition}`)
    .addField('Example: ', `${entries[0].example}`)
    message.channel.send({embed})
  } else {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed();
    embed.setTitle("❌Urban Dictionary Search Error")
         .setColor("#F20000")
         .setDescription("It seems you have got something wrong... ```You need to give me something to search for.```")
         message.channel.send({embed})
  }

})};
