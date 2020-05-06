const Discord = require('discord.js');
const ytdl = require('ytdl-core-discord');

//const UrlRegexp = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g')

const { token, prefix } = require('./config.json')

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (!msg.content.startsWith(prefix)) return;
});

client.on('message', async msg => {
  if (msg.content.startsWith(prefix + 'play')) {
    const message = msg.content.split(' ');

    if (message.length == 2) {  // todo: verify url with regexp
      const url = msg.content.split(' ')[1];
      
      try {
        const connection = await msg.member.voice.channel.join();
        
        try {
          connection.play(await ytdl(url), { type: 'opus' });
          msg.reply(`Playing ${url}`);
        } catch {
          msg.reply('Cannot play media of requested url.')
        }

      } catch {
        msg.reply('Cannot join voice channel.')
      }
    } else {
      msg.reply('Please, provide a valid url');
    }

  }
});

client.login(token);