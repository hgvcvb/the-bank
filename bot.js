const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("744674007852515422")
setInterval(function() {
channel.send(`mohamed mohamed mohamed mohamed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);