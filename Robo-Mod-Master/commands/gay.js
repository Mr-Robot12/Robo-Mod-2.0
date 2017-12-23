exports.run = function(client, message, args) {
  const RichEmbed = require("discord.js").RichEmbed;

  let gayness = Math.floor((Math.random() * 100) + 1)
  let user = message.mentions.users.first();

if (message.mentions.users.first()) {
  if (gayness >50){
    let embed = new RichEmbed();
embed.setTitle('Gay!')
     .setColor("#1E90FF")
     .setDescription(`${user.username} is ${gayness}% gay. :gay_pride_flag:`)
message.channel.send({embed})
} else {
  let embed = new RichEmbed();
embed.setTitle('Gay!')
   .setColor("#1E90FF")
   .setDescription(`${user.username} is ${gayness}% gay.`)
message.channel.send({embed})
}} else {
  if (gayness >50){
    let embed = new RichEmbed();
embed.setTitle('Gay!')
     .setColor("#1E90FF")
     .setDescription(`You are ${gayness}% gay. :gay_pride_flag:`)
message.channel.send({embed})
} else {
  let embed = new RichEmbed();
embed.setTitle('Gay!')
   .setColor("#1E90FF")
   .setDescription(`You are ${gayness}% gay.`)
message.channel.send({embed})
}}};
