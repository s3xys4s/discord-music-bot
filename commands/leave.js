module.exports = {
  name: 'leave',
  description: 'Leave current channel',
  async execute() {
    const { player } = require('./play');
    player.leave();
  }
}