
const { EmbedBuilder } = require("discord.js");
const { openBot } =  require("../../../../Functions/OpenBot/open");

module.exports = {
    name: 'vip-restart',
    description: "restart the bot",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    run: async (client, message) => {
      if(client.owner !== message.user.id) return;
   
       var {token,owner,prefix,kind} = client;
       message.reply({content:"**Bot will restart !!**"}).then(async () => {
        client.destroy()
       }).then(async () => {
        await openBot(token,prefix,kind,owner)
       })
      
    
      }
    }