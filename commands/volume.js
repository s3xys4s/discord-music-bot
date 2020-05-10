module.exports = {
  name: 'volume',
  description: 'Set volume (0.0 -- 5.0)',
  async execute(command, args) {
    volume = args[0];
    const { player } = require('./play');
    player.setVolume(volume);
  }
}