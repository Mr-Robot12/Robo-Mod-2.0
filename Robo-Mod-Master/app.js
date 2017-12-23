const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

var reload = (message, cmd) => {
  delete require.cache[require.resolve('./commands/' + cmd)];
  try {
    let cmdFile = require('./commands/' + cmd);
  } catch (err) {
    message.channel.send(`Problem loading ${cmd}: ${err}`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  }
  message.channel.send(`${cmd} reload was a success!`).then(
    response => response.delete(1000).catch(error => console.log(error.stack))
  ).catch(error => console.log(error.stack));
};

exports.reload = reload;

client.on('guildMemberRemove', member => {

    guild = member.guild;
    console.log(`User: ${member} left ${guild.name}`)

    const embed = new Discord.RichEmbed();
    const embed1 = new Discord.RichEmbed();
    const main = member.guild.channels.find('name', 'mainchat');
    const logs = member.guild.channels.find('name' ,"logs");

    embed.setTitle("Member left.")
    .setDescription(`${member} left the server. :wave:`)
    .setColor("#1E90FF")
    main.send({embed});

    embed1.setTitle("Member left")
          .setColor("#1E90FF")
          .setDescription(`${member} left the server.`)
    logs.send({embed: embed1});


});

client.login(settings.token);
