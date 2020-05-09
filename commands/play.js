const Player = require('../player');

module.exports = {
  name: 'play',
  description: 'Play a track by provided url',
  async execute(message, args) {
    const url = args[0];
    this.player = new Player(message);
    this.player.play(url);
  }
}