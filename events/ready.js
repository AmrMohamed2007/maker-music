
const client = require('..');
var Discord = require("discord.js")
client.on('ready', () => {
    console.log('Maker is ready!');
    client.user.setStatus("idle")
    .client.user.setActivity({"name":"Powred By DevTeam .","type":Discord.ActivityType.Playing})
  
});
