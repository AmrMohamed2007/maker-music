
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'vip-name',
    description: "change bot's name",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    options:[{name:"name",description:"type the name",type:3,required:true}],
    run: async (client, message) => {
      if(client.owner !== message.user.id) return;
      var args = message.options.getString("name")
      message.reply({content:"**Changing Username **"}).then((m) => {
        client.user.edit({username:args}).then(() => {
            m.edit({content:"**Done :-**"})
        }).catch((err) => {
            m.edit({content:`${err.message}`})
        })
      })
    
      }
    }