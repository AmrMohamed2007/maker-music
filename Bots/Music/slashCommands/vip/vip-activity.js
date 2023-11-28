
const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ActivityType } = require("discord.js");

module.exports = {
    name: 'vip-activity',
    description: "change bot's activity",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    options:[{name:"activity",description:"type the activity",type:3,required:true}],
    run: async (client, message) => {
    if(client.owner !== message.user.id) return;
var args = message.options.getString("activity")
if(!args) return message.reply({content:"> **You should type activity**"});
var row = new ActionRowBuilder()
.setComponents(
    new StringSelectMenuBuilder()
    .setCustomId("activity")
    .setPlaceholder("Choose the activity")
    .setOptions(
        {label:"Playing",value:`${ActivityType.Playing}`},
        {label:"Listening",value:`${ActivityType.Listening}`},
        {label:"Competing",value:`${ActivityType.Competing}`},
        {label:"Watching",value:`${ActivityType.Watching}`},
        {label:"Streaming",value:`${ActivityType.Streaming}`},
        {label:"Custom",value:`${ActivityType.Custom}`},
    )
)
message.reply({components:[row]}).then((msg) => {

    var collecter = msg.createMessageComponentCollector({filter: u=> u.user.id == message.user.id,max:1})

    collecter.on("collect", col => {
        if(col.values[0] == `${ActivityType.Streaming}`) {
            client.user.setActivity({name:args,type:Number(col.values[0]),url:"https://twitch.tv/devteam"})
        }else {
            client.user.setActivity({name:args,type:Number(col.values[0])})

        }
        msg.edit({content:"> **Done !!**",components:[]})
    })
})
      }
    }