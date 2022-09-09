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
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {sentMsg.react(disc.emoji[i]);}, 100);
        }

        sentMsg.awaitReactions(r => r.emoji.name == disc.emoji[5], {max: 2})
    .then(collected => {
        let one = collected.first().message.reactions.cache.get(disc.emoji[1]).count;
        let two = collected.first().message.reactions.cache.get(disc.emoji[2]).count;
        let three = collected.first().message.reactions.cache.get(disc.emoji[3]).count;
        let four = collected.first().message.reactions.cache.get(disc.emoji[4]).count;
        inputContent(msg, one, two, three, four);
    });
        
    })

    
    
}

function inputContent (msg, one, two, three, four) {
    let timeCount = {one, two, three, four};

    for (let i in timeCount) {
        if (timeCount[i] !== 2) continue;
        let min = timeCount[i];
        break;
    }
    
}