import type { Message } from 'discord.js';
import type { Command } from '../../types';

export function PingCommandFactory(): Command {
  const CONFIGS: Command['configs'] = {
    triggers: ['p', 'ping'],
    numberOfParameters: 0,
    usage: 'Use this command to check the bot connectivity',
  };

  const run = (message: Message) => message.reply('Pong!');

  return {
    configs: CONFIGS,
    run,
  };
}
