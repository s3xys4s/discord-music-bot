const Discord = require('discord.js');
const ytdl = require('ytdl-core-discord');

const { token } = require('./config.json')

const client = new Discord.Client();
const prefix = 'cxc!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (!msg.content.startsWith(prefix)) return;
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'play')) {
    console.log(msg.content)
    //msg.reply()
    //connection.play(await ytdl(url), { type: 'opus' });
  }
});

client.login(token);