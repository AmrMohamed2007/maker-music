const { ApplicationCommand, ApplicationCommandType, ChannelType } = require("discord.js");
const {joinVoiceChannel} = require("@discordjs/voice")
module.exports = {
  name: 'join',
  description: 'help',

 userPerms:[],
 botPerms:[],
 aliases:["j",""],

  run: async (client, message) => {
    
    if (!message.member.voice.channel) return message.reply({ content: `> ** يجب ان تكون في روم صوتي حقي**` });
    try {
      var args = message.content.split(" ")[1]
      if(!args) return message.reply({content:"اكتب ايدي الروم الصوتي"});
      var channel = message.guild.channels.cache.get(args)
      if(channel.type !== ChannelType.GuildVoice) return;

      await joinVoiceChannel({
        guildId: message.guild.id,
        channelId: args,
        adapterCreator: channel.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false
      });
    }
    catch (e) {
        console.error(e)
        message.channel.send(`حدث خطا اثناء التشغيل !`)
    }
  }
}