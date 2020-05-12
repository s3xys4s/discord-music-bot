const Player = require('../player');
const { replies } = require('../replies');

module.exports = {
  name: 'play',
  description: 'Play a track by provided url',
  async execute(message, args) {
    const url = args[0];

    const UrlRegexp = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g');

    console.log(this.player)
    if (!this.player) this.player = new Player(message);
    this.player.play(url);
    if (replies.play) message.reply(replies.play + url);
  }
}