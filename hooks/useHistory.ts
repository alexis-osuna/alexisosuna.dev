import { useState } from "react";
import { History } from "@/components";

export const useHistory = (defaultValue?: History[]) => {
  const [history, setHistory] = useState<History[]>(defaultValue ?? []);
  const [command, setCommand] = useState<string>("");
  const [lastCommandIndex, setLastCommandIndex] = useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value: React.ReactNode) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
