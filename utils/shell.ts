import * as commands from "@/components/commands";

export const shell = async (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
  setHistory: (value: string) => void,
  toggleTheme: () => void,
  clearHistory: () => void,
) => {
  const args = command.split(" ");
  args[0] = args[0].toLowerCase();

  if (args[0] === "clear") {
    clearHistory();
  } else if (args[0] === "theme") {
    toggleTheme();
  } else if (command === "") {
    setHistory("");
  } else if (Object.keys(commands).indexOf(args[0]) === -1) {
    setHistory(
      `shell: command not found: ${args[0]}. Try 'help' to get started.`,
    );
  } else {
    const output = await (commands as any)[args[0]](args.slice(1));
    setHistory(output);
  }

  setCommand("");
};
