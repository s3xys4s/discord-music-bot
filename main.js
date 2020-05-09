const fs = require('fs');
const Discord = require('discord.js');
const { token, prefix } = require('./config.json');

//const UrlRegexp = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g')

async function bootstrap() {
  const client = new Discord.Client();
  
  client.commands = new Discord.Collection()
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      message.reply(`Command does not exits. See ${prefix}help for the list of available commands.`);
      return;
    };

    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply('There was an error trying to execute that command!');
    }

  });
  
  client.login(token);
};

bootstrap();








