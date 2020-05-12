async function formatQueue() {
  const { player } = require('./play');
  const queue = player.currentQueue;
  result = [];
  
  result.push({
    name: 'Now playing:',
    value: player.nowPlaying
  })

  //reduce!!!
  for (n in queue) {
    result.push({ 
      name: parseInt(n) + 1,
      value: queue[n]
    });
  };

  return result;
};

module.exports = {
  name: 'queue',
  description: 'Show queue',
  async execute(message, args) {
    message.channel.send({
      embed: {
        color: '#FF0000',
        description: 'Next in queue:',
        fields: await formatQueue(),
      }
    });
  }
}