const { ApplicationCommand, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: 'nowplaying',
  description: 'help',

 userPerms:[],
 botPerms:[],

 aliases:["np",""],

  run: async (client, message) => {
    if (!message.member.voice.channel) return message.reply({ content: `> ** يجب ان تكون في روم صوتي حقي**` });
    try {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`I'm not singing now to stop !`)
        const song = queue.songs[0]
        message.channel.send(`I'm singing **\`${song.name}\`**, by ${song.user}`)
    }
    catch (e) {
        console.error(e)
        message.channel.send(`حدث خطا اثناء التشغيل !`)
    }
  
  }
}