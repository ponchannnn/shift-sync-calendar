const discord = require("discord.js");
const config = require("./environ.json");
const shift = require("./shift.js");
const token = config.token;
const prefix = config.prefix;
//npm i discord.js@12.5.3

const client = new discord.Client();

client.on('ready', () => {
    console.log('ready...');
});

client.login(token);

client.on("message", msg => {
    if (msg.author.bot) return;
    if (!msg.author.id == config.ponDMID) return;
    if (msg.content == `${prefix}shift create`) {
        shift.create(msg);
    }
});