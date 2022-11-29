const Discord = require("discord.js")
const client = new Discord.Client({
    intents: Discord.IntentsBitField.Flags.MessageContent,
    partials: [Discord.Partials.Message, Discord.Partials.Channel, Discord.Partials.Reaction]
})
const {config} = require("dotenv");
config();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})


client.on("messageCreate", (message) => {
    console.log('test')
    console.log(message.content);
    if (message.content == "!ping") {
        message.reply("Pong!")
            .then(() => console.log("Inviato"))
            .catch((err) => console.log(err))
    }
})
    

client.login(process.env.TOKEN)