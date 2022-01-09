import type { Command } from '../../commands/types';
import type { CommandsList, CommandCollection } from './types';

export default function CommandCollectionFactory(): CommandCollection {
  let commandsList: CommandsList = new Map();

  const registerCommands = (commands: Command[]) => {
    for (const command of commands) {
      for (const trigger of command.configs.triggers) {
        commandsList.set(trigger, command);
      }
    }
  };

  const get = (commandTrigger: string) => commandsList.get(commandTrigger);

  return {
    registerCommands,
    get,
  };
}
