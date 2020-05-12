const { replies } = require('../replies');

module.exports = {
  name: 'skip',
  description: 'Skip current track',
  async execute(message) {
    const { player } = require('./play');
    player.skip();
    if (replies.skip) message.reply(replies.skip);
  }
}