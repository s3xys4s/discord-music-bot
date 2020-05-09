module.exports = {
  name: 'pause',
  description: 'Pause current track',
  async execute() {
    const { player } = require('./play');
    player.pause();
  }
}