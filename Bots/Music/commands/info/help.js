const { ApplicationCommand, ApplicationCommandType, EmbedBuilder } = require("discord.js");


module.exports = {
  name: 'help',
  description: 'help',

 userPerms:[],
 botPerms:[],


  run: async (client, message) => {
    var embed = new EmbedBuilder()
    .setDescription(`
    # **Music Commands**
    \`play\` => play a song
    \`stop\` => stop a song
    \`pause\` => pause a song
    \`resume\` => resume a song
    \`volume\` => set volume for the song
    \`repeat\` => repeat the song
    \`autoplay\` => autoplay songs
    \`nowplaying\` => song are playing
    \`skip\` => skip a song

    # **Owner Commands**
    > /set-prefix => change token for the bot
    > /vip-restart => restart the bot
    > /vip-name => set name for the bot
    > /vip-avatar => set avatar for the bot
    > /vip-status => set status for the bot
    > /vip-activity => set activity for the bot
    > /vip-info => set info for the bot
    > /vip-transfer => transfer bot's owner to another owner


    `)
    .setTitle("Help List")
    .setColor("Random")
    .setTimestamp()
    .setFooter({text:"Powred By DevTeam",iconURL:message.guild.iconURL()})
    
    message.reply({
      embeds:[embed]  

    })
  }
}