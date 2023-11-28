
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'vip-avatar',
    description: "change bot's avatar",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    options:[{name:"avatar",description:"type the avatar",type:3,required:true}],
    run: async (client, message) => {
    if(client.owner !== message.user.id) return;
      var args = message.options.getString("avatar")
      message.reply({content:"**Changing Avatar ...**"}).then((m) => {
        client.user.edit({avatar:args}).then(() => {
            m.edit({content:"**Done :-**"})
        }).catch((err) => {
            m.edit({content:`${err.message}`})
        })
      })
    
      }
    }