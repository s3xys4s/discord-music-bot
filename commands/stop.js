const { player } = require('./play')

module.exports = {
  name: 'stop',
  description: 'Stop current track',
  player: null,
  async execute(message, args) {
    player.stop();
  }
}