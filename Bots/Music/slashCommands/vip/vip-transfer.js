
const { EmbedBuilder } = require("discord.js");
const { transferOwner } = require("../../../../models/user");

module.exports = {
    name: 'vip-transfer',
    description: "transfer owner of the bot to someone",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    options:[{name:"user",description:"mention the user",type:6,required:true}],
    run: async (client, message) => {
    if(client.owner !== message.user.id) return;
      var args = message.options.getUser("user")
      if(!args) return;
      transferOwner(client.user.id,message.user.id,args.id).then(() => {
        message.reply(`> **The bot owner transferd to ${args}**`)
        client.owner = args.id
      }).catch((err) => {
        message.reply({content:`${err}`})
      })
     
    
      }
    }