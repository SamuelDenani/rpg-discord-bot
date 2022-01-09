import { Message } from 'discord.js';

export type MessageHandler = {
  handle: (message: Message) => void;
};
