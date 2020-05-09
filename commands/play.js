module.exports = {
  name: 'play',
  description: 'Play a track by provided url',
  async execute(message, args) {
    url = args[1];
    const connection = await message.member.voice.channel.join();
  }
}