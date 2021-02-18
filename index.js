const Discord = require("discord.js");
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });

client.on("ready", () => {
  client.user.setActivity(`the commands!`, { type: 3, browser: "DISCORD IOS"  });
    console.log("Bot ready!");
});
