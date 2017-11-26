exports.run = (client, message, args) => {
    const RichEmbed = require("discord.js").RichEmbed;


  if (!message.member.hasPermission("ADMINISTRATOR")) {
    let embed = new RichEmbed();
    embed.setTitle("❌ Permission Error")
        .setColor("#F20000")
        .setDescription("It seems you have got something wrong... ```You do not have high enough permissions to do this.```")
    return message.channel.send({embed});
  }

    if(!args || args.size < 1) return message.channel.send("You must provide a command name to reload.");

  delete require.cache[require.resolve(`./${args[0]}.js`)];

  message.channel.send(`The command ${args[0]} has been reloaded`);
};
