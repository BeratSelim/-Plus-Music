const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setGame("Yakında/Soon") 
    console.log("Discord API'ye Bağlanıldı")   
});

client.login(process.env.BOT_TOKEN)