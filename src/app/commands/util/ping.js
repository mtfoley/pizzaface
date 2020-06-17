const { Command } = require('discord-akairo');

class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['ping', 'pong'],
      category: 'util',
      description: {
        content: 'Pings me!',
      },
    });
  }

  async exec(message) {
    const msg = await message.util.send('Pinging~');
    // eslint-disable-next-line max-len
    const latency = (msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp);
    return message.util.send([
      `**Gateway Ping~ ${latency.toString()}ms**`,
      `**API Ping~ ${Math.round(this.client.ws.ping).toString()}ms**`,
    ]);
  }
}

module.exports = PingCommand;
