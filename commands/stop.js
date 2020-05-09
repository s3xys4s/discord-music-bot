module.exports = {
  name: 'stop',
  description: 'Stop current track',
  async execute() {
    const { player } = require('./play');
    player.stop();
  }
}