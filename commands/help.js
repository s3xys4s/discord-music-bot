const fs = require('fs');
const { prefix } = require('../config.json');

async function getCommands() {
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
  result = [];
  for (file of commandFiles) {
    command = require(`./${file}`);
    result.push({ 
      name: `${prefix}${command.name}`,
      value: command.description
    });
  };

  return result;
};

module.exports = {
  name: 'help',
  description: 'Show the list of available commands',
  async execute(message, args) {
    message.channel.send({
      embed: {
        color: '#FF0000',
        description: 'Available commands:',
        fields: await getCommands(),
      }
    });
  }
}