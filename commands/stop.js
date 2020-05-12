const { replies } = require('../replies');

module.exports = {
  name: 'stop',
  description: 'Stop current track',
  async execute(message) {
    const { player } = require('./play');
    player.stop();
    if (replies.stop) message.reply(replies.stop);
  }
}