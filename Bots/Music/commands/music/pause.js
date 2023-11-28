const { ApplicationCommand, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: 'pause',
  description: 'help',

 userPerms:[],
 botPerms:[],
 aliases:["ps",""],

  run: async (client, message) => {
    
    if (!message.member.voice.channel) return message.reply({ content: `> ** يجب ان تكون في روم صوتي حقي**` });
        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send(`I'm not singing now to stop !`)
        
    if (queue.paused) {
      return message.reply(`الموسيقى موقفه بالفعل !`)
    }
    queue.pause()
    message.channel.send('تم ايقاف تشغيل الاغاني بنجاح !')
        }
        catch (e) {
            console.error(e)
            message.channel.send(`حدث خطا اثناء التشغيل !`)
        }
  }
}