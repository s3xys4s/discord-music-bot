module.exports = {
  name: 'skip',
  description: 'Skip current track',
  async execute() {
    const { player } = require('./play');
    player.skip();
  }
}