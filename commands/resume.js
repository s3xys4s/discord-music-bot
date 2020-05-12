const { replies } = require('../replies');

module.exports = {
  name: 'resume',
  description: 'Resume current track',
  async execute(message) {
    const { player } = require('./play');
    player.resume();
    if (replies.resume) message.reply(replies.resume);
  }
}