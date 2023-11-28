
const { EmbedBuilder } = require("discord.js");
const {  editbot } = require("../../../../models/user");


module.exports = {
    name: 'set-prefix',
    description: "change bot's prefix",

    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    options: [{ name: "prefix", description: "type the prefix", type: 3, required: false }],
    run: async (client, message) => {
        if (client.owner !== message.user.id) return;
        var args = message.options.getString("prefix") || null
        var { prefix } = client;
        if(args == null) {
            message.reply({content:`The prefix : \`${prefix}\``})
        }else {

       
        message.reply({ content: "Changing Prefix ", ephemeral: true }).then((m) => {
            editbot(client.owner, client.user.id, args, "prefix").then(() => {
                client.prefix = args;
                m.edit({content:"**Done :-**"})
            }).catch((err) => {
                m.edit({ content: `${err}` })
            })
        })
    }

    }
}