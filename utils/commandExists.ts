import * as commands from "@/components/commands";

export const commandExists = (command: string) => {
  const c = ["clear", "theme", ...Object.keys(commands)];
  return c.indexOf(command.split(" ")[0].toLowerCase()) !== -1;
};
