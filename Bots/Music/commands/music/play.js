const { ApplicationCommand, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: 'play',
  description: 'help',

 userPerms:[],
 botPerms:[],
 aliases:["p",""],

  run: async (client, message,args) => {
    if (!message.member.voice.channel)return message.reply({ content: `> ** يجب ان تكون في روم صوتي حقي**` });
    try {
        const string = args.join(' ')
        if (!string) return message.channel.send(`:x: | Please enter a song url or query to search.`)
        client.distube.play(message.member.voice.channel, string, {
            member: message.member,
            textChannel: message.channel,
            message
        })
    }
    catch (e) {
        console.error(e)
        message.channel.send(`حدث خطا اثناء التشغيل !`)
    }
   
  }
}