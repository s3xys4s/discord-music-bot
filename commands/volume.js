const { replies } = require('../replies');

module.exports = {
  name: 'volume',
  description: 'Set volume (0.0 -- 10.0)',
  async execute(message, args) {
    volume = args[0];
    const { player } = require('./play');
    player.setVolume(volume);
    if (replies.volume) message.reply(replies.volume + volume);
  }
}