export type BotConfigs = {
  prefix: string;
  token: string;
};

export type GeneralConfigs = GeneralObject<BotConfigs>;

export type Config = {
  initialize: () => void;
  get: (key: string) => unknown;
};
