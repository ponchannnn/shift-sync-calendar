const discord = require("discord.js");
const config = require("./environ.json");
const shift = require("./shift.js");
const token = config.token;
const prefix = config.prefix;
//npm install googleapis@105 @google-cloud/local-auth@2.1.0 --save

const client = new discord.Client();

client.on('ready', () => {
    console.log('ready...');
});

client.login(token);

client.on("message", msg => {
    if (msg.author.bot) return;
    if (!msg.author.id == "739006634533060702") return;
    if (msg.content.matchAll("!shift create")) {
        shift
    }
});