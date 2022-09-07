const discord = require("discord.js");
const client = new discord.Client();
const disc = require("./disc.json");
//npm install node-google-calendar

module.exports = {
    create : this.create
}

let shiftMsgEmbed = new MessageEmbed();
shiftMsgEmbed.setTitle(disc.shiftMsgEmbed.Title);
shiftMsgEmbed.setDiscription(disc.shiftMsgEmbed.Discription);

function create (msg) {
    let sentMsg = msg.channel.send(shiftMsgEmbed);

    for (let i = 1; i <= 4; i++) {
        sentMsg.react(i);
    }

    sentMsg.awaitReactions()
}