const { replies } = require('../replies');

module.exports = {
  name: 'leave',
  description: 'Leave current channel',
  async execute(message) {
    const { player } = require('./play');
    player.stop();
    player.leave();
    if (replies.leave) message.reply(replies.leave);
  }
}