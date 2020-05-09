const ytdl = require('ytdl-core-discord');

module.export = class Player {
  constructor(connection) {
    this.queue = [];
    this.connection = connection;
  }

  play(url) {
    //msg.reply(`Playing ${url}`);
    if (this.queue.length) {
      this.queue.push(url)
    };
    this.dispatcher = connection.play(await ytdl(url), { type: 'opus' });
    url = this.queue.shift();
  }

  pause() {
    this.dispatcher.pause();
  }

  resume() {
    this.dispatcher.resume();
  }

  skip() {
    this.queue.shift();
  }

  stop() {
    if (this.dispatcher) this.dispatcher.destroy();
  }

  setVolume() {
    this.dispatcher.setVolume()
  }

  get next() {
    return this.queue[1];
  }
}