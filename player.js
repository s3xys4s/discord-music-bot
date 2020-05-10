const ytdl = require('ytdl-core-discord');

module.exports = class Player {
  constructor(message) {
    this.queue = [];
    this.message = message;
  }

  get queueIsEmpty() {
    if (this.queue.length) return false;
    else return true;
  }

  async play(url) {
    //msg.reply(`Playing ${url}`);
    if (this.queueIsEmpty) {
      this.connection = await this.message.member.voice.channel.join();      
      this.dispatcher = this.connection.play(await ytdl(url), { type: 'opus' });
    } else {
      this.queue.push(url);
    }

    this.dispatcher.on('end', async () => {
      if (this.queueIsEmpty) {
        this.leave();
      } else {
        url = this.queue.shift();
        this.dispatcher = this.connection.play(await ytdl(url), { type: 'opus' });
      }
    });
  }

  async pause() {
    this.dispatcher.pause();
  }

  async resume() {
    this.dispatcher.resume();
  }

  async skip() {
    if (this.dispatcher) {
      if (this.queueIsEmpty) {
        // nothing to skip
        
      } else {
        const url = this.queue.shift();
        this.dispatcher.destroy();
        this.play(url);
      }
    }
  }

  async stop() {
    if (this.dispatcher) this.dispatcher.destroy();
  }

  async leave() {
    this.connection.disconnect();
  }

  async setVolume() {
    if (this.dispatcher) this.dispatcher.setVolume();
  }

}