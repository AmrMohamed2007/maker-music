
const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ActivityType } = require("discord.js");

module.exports = {
    name: 'vip-status',
    description: "change bot's status",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    run: async (client, message) => {
        if(client.owner !== message.user.id) return;
      

var row = new ActionRowBuilder()
.setComponents(
    new StringSelectMenuBuilder()
    .setCustomId("activity")
    .setPlaceholder("Choose the Status")
    .setOptions(
        {label:"Online",value:`online`},
        {label:"Dnd",value:`dnd`},
        {label:"Idle",value:`idle`},
        {label:"Invisible",value:`invisible`},
    
    )
)
message.reply({components:[row]}).then((msg) => {

    var collecter = msg.createMessageComponentCollector({filter: u=> u.user.id == message.user.id,max:1})

    collecter.on("collect", col => {
    client.user.setStatus(col.values[0])
        msg.edit({content:"> **Done **",components:[]})
    })
})
      }
    }