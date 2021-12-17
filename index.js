const { Client, Intents, MessageEmbed } = require('discord.js');
const { botToken } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('ShutUpBot is now online!');

    client.on('messageCreate', message => {
        try {
            if (message.author.bot && message.author.id !== client.user.id)
                client.channels.cache.get(message.channel.id).send(`Shut up ${message.author}!`)
        } catch { }
    })
});
client.login(botToken);