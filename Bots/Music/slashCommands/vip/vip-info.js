


const { EmbedBuilder, Embed } = require("discord.js");
const { ReturnInfo } =require("../../../../models/user");
const ms = require("ms");
module.exports = {
    name: 'vip-info',
    description: "show bot's info",
  
    userPerms: ["Administrator"],
    botPerms: ["SendMessages"],
    run: async (client, message) => {
      if(client.owner !== message.user.id) return;
   
  ReturnInfo(client.user.id).then((data) => {
    var das2 = data.DateNow + ms(`${data.days}d`)
    console.log(data.DateNow);
var embed =new EmbedBuilder()
.setColor("Random")
.setTitle("Bot Subscription")
.setDescription(`**
Bot Owner : ${data.owner}
Bot Id : ${data.botid}
Ends In: <t:${Math.floor((Date.now() + ms(`${data.days}d`)) / 1000)}>
Time : ${data.days} Days

**`)
message.reply({embeds:[embed]})
  }).catch((err) => {
    message.reply({content:`${err}`})
  })
    
      }
    }