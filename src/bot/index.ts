import { Client, Message } from 'discord.js';
import { Config } from '../config/types';
import type { MessageHandler } from './MessageHandler/types';

export default function BotFactory(config: Config, messageHandler: MessageHandler) {
  const botClient = new Client({
    intents: [
      'DIRECT_MESSAGES',
      'DIRECT_MESSAGE_REACTIONS',
      'DIRECT_MESSAGE_TYPING',
      'GUILDS',
      'GUILD_MESSAGES',
      'GUILD_MESSAGE_REACTIONS',
      'GUILD_MESSAGE_TYPING',
    ],
  });

  const start = () => {
    registerEventListeners();

    botClient.login(config.get('token') as string);
  };

  const registerEventListeners = () => {
    botClient.on('ready', handleReadyEvent);
    botClient.on('messageCreate', handleMessageEvent);
  };

  const handleReadyEvent = () => {
    if (!botClient.user) return;

    botClient.user.setPresence({
      activities: [
        {
          name: ';help',
          type: 'WATCHING',
        },
      ],
    });
  };

  const handleMessageEvent = (message: Message) => messageHandler.handle(message);

  return {
    start,
  };
}
