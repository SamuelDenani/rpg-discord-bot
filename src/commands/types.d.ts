import { Message } from 'discord.js';

type Command = {
  configs: {
    triggers: string[];
    numberOfParameters: number;
    usage: string;
  };
  run: (message: Message, params?: string[]) => void;
};
