const { replies } = require('../replies');

module.exports = {
  name: 'pause',
  description: 'Pause current track',
  async execute(message) {
    const { player } = require('./play');
    player.pause();
    if (replies.pause) message.reply(replies.pause);
  }
}