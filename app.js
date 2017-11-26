const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

exports.run = function(client, message, args) {

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

    console.log(`User: ${member} has left the server`)

    const embed = new Discord.RichEmbed();
    const main = member.guild.channels.find('name', 'mainchat');
    embed.setTitle("Member left.")
    .setDescription(`${member} left the server - TEST`)
    .setColor("#1E90FF")
    main.send({embed});

})};

client.login(settings.token);
