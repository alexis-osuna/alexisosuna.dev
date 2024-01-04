import * as commands from "@/components/commands";

export const handleTabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const c = Object.keys(commands).filter((entry) => entry.startsWith(command));

  if (c.length === 1) {
    setCommand(c[0]);
  }
};
