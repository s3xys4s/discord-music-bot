const ytdl = require('ytdl-core-discord');

module.exports = class Player {
  constructor(message) {
    this.queue = [];
    this.message = message;
    this.dispatcher = null;
  }

  get queueIsEmpty() {
    if (this.queue.length) return false;
    else return true;
  }

  async queueNext() {
    return this.queue.shift();
  }

  async queueAdd(url) {
    this.queue.push(url);
  }

  async createDispatcher(url) {
    if (!this.connection) this.connection = await this.message.member.voice.channel.join();
    this.dispatcher = this.connection.play(await ytdl(url), { type: 'opus' });
    this.dispatcher.on('end', async () => {
      if (this.queueIsEmpty) {
        this.leave();
      } else {
        url = this.queueNext();
        this.createDispatcher(url)
      }
    });
  };

  async destroyDispatcher() {
    this.dispatcher.destroy()
  }

  async flushQueue() {
    this.queue = [];
  }

  async play(url) {
    if (this.dispatcher) {
      this.queueAdd(url);
    } else {
      this.createDispatcher(url);
    }
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
        this.leave();
      } else {
        const url = await this.queueNext();
        this.destroyDispatcher();
        this.createDispatcher(url);
      }
    }
  }

  async stop() {
    if (this.dispatcher) {
      this.flushQueue();
      this.destroyDispatcher()
    };
  }

  async leave() {
    this.connection.disconnect();
  }

  async setVolume(volume) {
    if (this.dispatcher) this.dispatcher.setVolume(volume);
  }

}