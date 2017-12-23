exports.run = (client, message, args) => {
  let text = message.content.split(/\s+/g).slice(1).join(" ");
var DDG = require('node-ddg-api').DDG;

var ddg = new DDG('my-app-name');

  ddg.instantAnswer(text, {skip_disambig: '0'}, function(err, response) {
if (!response.Abstract) {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed();
  embed.setTitle("❌DuckDuckGo Search Error")
       .setColor("#F20000")
       .setDescription("It seems you have got something wrong... ```Sorry, I couldn't find any results for: " + text + "```")
return message.channel.send({embed})
};

if (message.content.length >4) {
  var Result = response.Abstract
  var image = response.Image

  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed();
  embed.setTitle(`DuckDuckGo Search Result for ${text}`)
       .setThumbnail(image)
       .setDescription('Here is some quick results from your search topic.')
       .setColor('#1E90FF')
       .addField('Quick Result:', `🔍 ${Result}`)
       .addField('Results Link:', `:link: ${response.AbstractURL}`)
  message.channel.send({embed});
} else {
  const Discord = require("discord.js");
  let embed = new Discord.RichEmbed();
  embed.setTitle("❌DuckDuckGo Search Error")
       .setColor("#F20000")
       .setDescription("It seems you have got something wrong... ```You need to give me something to search for.```")
  message.channel.send({embed});
}
})};
