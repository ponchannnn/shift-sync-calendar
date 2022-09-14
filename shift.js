const discord = require("discord.js");
const { content } = require("googleapis/build/src/apis/content");
const client = new discord.Client();
const disc = require("./disc.json");
//npm install node-google-calendar

module.exports = {
    create : create
}

let shiftMsgEmbed = new discord.MessageEmbed()
.setTitle(disc.shiftMsgEmbed.Title)
.setDescription(disc.shiftMsgEmbed.Description);

async function create (msg) {
    let date = inputDate(msg);
    await console.log(date);
    await msg.channel.send(shiftMsgEmbed)
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
    let timeCount = [one, two, three, four];
    let min, max;
    for (let i in timeCount) {
        if (timeCount[i] !== 2) continue;
        min = i;
        break;
    }

    for (let i = 3; i > 0; i--) {
        if (timeCount[i] !== 2) continue;
        max = i;
        break;
    }

    msg.channel.send(`min=${min}, max=${max}`);
    
}

async function inputDate (msg) {
    msg.channel.send(disc.inputDateMsg);
    msg.channel.awaitMessages(m => m.content.startsWith("2022/03/11"), { max: 1, time: 10 * 1000})
    .then(collected => {
        
    })
}