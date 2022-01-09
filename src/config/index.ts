import fs from 'fs';
import path from 'path';
import { BotConfigs, Config, GeneralConfigs } from './types';

export default function ConfigFactory(): Config {
  const CONFIG_PATH = path.join(process.cwd(), 'configs', 'bot.json');
  const JSON_KEYS = ['prefix', 'token'];

  const GENERAL_CONFIGS: BotConfigs = {} as BotConfigs;

  const initialize = () => {
    if (fs.existsSync(CONFIG_PATH)) {
      const localConfigFile = require(CONFIG_PATH);

      setConfigs(localConfigFile);
    } else {
      setConfigs(process.env as GeneralConfigs);
    }
  };

  const setConfigs = (configJSON: GeneralConfigs) => {
    const configEntries = Object.entries(configJSON);

    for (const [key, value] of configEntries) {
      if (!JSON_KEYS.includes(key)) continue;

      set(key, value);
    }
  };

  const set = (key: string, value: any) =>
    (GENERAL_CONFIGS[key as keyof BotConfigs] = value);

  const get = (configKey: string) => GENERAL_CONFIGS[configKey as keyof BotConfigs];

  return {
    initialize,
    get,
  };
}
