const { Listener } = require('discord-akairo');
const Logger = require('../../util/logger');

class CommandBlockedListener extends Listener {
  constructor() {
    super('commandBlocked', {
      event: 'commandBlocked',
      emitter: 'commandHandler',
      category: 'commandHandler',
    });
  }

  exec(message, command, reason) {
    const text = {
      guild: () => 'You must be in a guild to use this command.',
    }[reason];

    const level = message.guild ? `${message.guild.name}/${message.author.tag}` : `${message.author.tag}`;
    Logger.info(`[${level}] => ${command.id} ~ ${reason}`, { level: 'COMMAND BLOCKED' });

    if (!text) return;
    if (message.guild ? message.channel.permissionsFor(this.client.user).has('SEND_MESSAGES') : true) {
      // eslint-disable-next-line consistent-return
      return message.channel.send(text());
    }
  }
}

module.exports = CommandBlockedListener;
