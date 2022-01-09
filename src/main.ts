import BotFactory from './bot';
import ConfigFactory from './config';
import MessageHandlerFactory from './bot/MessageHandler';
import CommandCollectionFactory from './bot/CommandCollection';
import commands from './commands';

const configsFactory = ConfigFactory();
configsFactory.initialize();

const commandCollectionFactory = CommandCollectionFactory();
commandCollectionFactory.registerCommands(commands);

const messageHandlerFactory = MessageHandlerFactory(
  configsFactory,
  commandCollectionFactory,
);
const carroBot = BotFactory(configsFactory, messageHandlerFactory);

carroBot.start();
