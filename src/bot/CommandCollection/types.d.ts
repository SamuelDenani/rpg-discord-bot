export type CommandsList = Map<string, Command>;

export type CommandCollection = {
  registerCommands: (commands: Command[]) => void;
  get: (trigger: string) => Command;
};
