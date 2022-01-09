import type { Message } from 'discord.js';
import type { MessageHandler } from './types';
import type { Command } from '../../commands/types';
import type { Config } from '../../config/types';
import type { CommandCollection } from '../CommandCollection/types';

export default function MessageHandlerFactory(
  config: Config,
  commandCollection: CommandCollection,
): MessageHandler {
  const handle = (message: Message) => {
    if (!validateMessage(message)) return;

    const messageToHandle = message;
    messageToHandle.content = message.content.substring(
      (config.get('prefix') as string).length,
    );

    executeCommand(messageToHandle);
  };

  const validateMessage = (message: Message) =>
    !message.author.bot &&
    !(message.channel.type === 'DM') &&
    message.content.startsWith(config.get('prefix') as string);

  const executeCommand = (message: Message) => {
    const [command, ...params] = message.content.split(' ');

    try {
      const commandToRun: Command = commandCollection.get(command);

      if (commandToRun) commandToRun.run(message, params);
    } catch (error) {
      console.log('\x1b[31m', error);

      message.reply('Ocorreu um erro inesperado, talvez eu precise de manutenção :/');
    }
  };

  return {
    handle,
  };
}
