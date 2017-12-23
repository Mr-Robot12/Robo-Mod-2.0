exports.run = function(client, message, args) {
const search = require('youtube-search');
let text = message.content.split(/\s+/g).slice(1).join(" ");

var opts = {
  maxResults: 1,
  key: '<API-KEY>'
};

search(`${text}`, opts, function(err, results) {

const Discord = require("discord.js");
const embed = new Discord.RichEmbed();
var channel = results[0].channelTitle
var link = results[0].link
var thumb = results[0].thumbnails
var title = results[0].title

embed.setTitle('YouTube Search Result')
     .setImage(`https://img.youtube.com/vi/${results[0].id}/0.jpg`)
     .setColor("#1E90FF")
     .addField('Channel:', channel)
     .addField('Title:', title)
     .addField('Link:', link)
message.channel.send({embed});
})};
