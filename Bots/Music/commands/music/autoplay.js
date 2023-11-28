const { ApplicationCommand, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: 'autoplay',
  description: 'help',

 userPerms:[],
 botPerms:[],
 aliases:["",""],

  run: async (client, message) => {
    
    if (!message.member.voice.channel) return message.reply({ content: `> ** يجب ان تكون في روم صوتي حقي**` });
        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send(`I'm not singing now to stop !`)
            const autoplay = queue.toggleAutoplay()
            message.channel.send(`AutoPlay: \`${autoplay ? 'On' : 'Off'}\``)
        }
        catch (e) {
            console.error(e)
            message.channel.send(`حدث خطا اثناء التشغيل !`)
        }
    }
  

}