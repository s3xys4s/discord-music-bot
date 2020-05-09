const Player = require('../player');

module.exports = {
  name: 'play',
  description: 'Play a track by provided url',
  player: null,
  async execute(message, args) {
    url = args[1];
    this.player = new Player(message);
    this.player.play(url);
  }
}