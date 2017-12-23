exports.run = (client, message, args) => {
    const RichEmbed = require("discord.js").RichEmbed;
    const settings = require('../Robo-Mod-Master/settings.json');


  if(message.author.id !== settings.ownerID) {
    let embed = new RichEmbed();
    embed.setTitle("❌ Permission Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```Only Ethan#1426 can use this thicc command, please contact him if you need it.```")
    return message.channel.send({embed});
  }

    if(!args || args.size < 1) return message.channel.send("You must provide a command name to reload.");

  delete require.cache[require.resolve(`./${args[0]}.js`)];

  message.channel.send(`The command ${args[0]} has been reloaded`);
};
