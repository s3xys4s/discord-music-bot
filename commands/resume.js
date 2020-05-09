module.exports = {
  name: 'resume',
  description: 'Resume current track',
  async execute() {
    const { player } = require('./play');
    player.resume();
  }
}