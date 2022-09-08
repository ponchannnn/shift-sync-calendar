const discord = require("discord.js");
const client = new discord.Client();
const disc = require("./disc.json");
//npm install node-google-calendar

module.exports = {
    create : create
}

let shiftMsgEmbed = new discord.MessageEmbed()
.setTitle(disc.shiftMsgEmbed.Title)
.setDescription(disc.shiftMsgEmbed.Description);

function create (msg) {
    msg.channel.send(shiftMsgEmbed)
    .then(sentMsg => {
        for (let i = 1; i <= 4; i++) {
            setTimeout(() => {sentMsg.react(disc.emoji[i]);}, 100);
        }

        sentMsg.awaitReactions(r => r.emoji.name == disc.emoji[4], {max: 2})
    .then(collected => 
        console.log(collected.first().message.reactions.cache.get(disc.emoji[1]).count));
        
    })

    
    
}