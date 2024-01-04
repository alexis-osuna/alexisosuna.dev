import React from "react";
import { History, Prompt } from "@/components";
import { commandExists, handleTabCompletion, shell } from "@/utils";

export interface InputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  command: string;
  lastCommandIndex: number;
  history: History[];
  setCommand: React.Dispatch<React.SetStateAction<string>>;
  setLastCommandIndex: React.Dispatch<React.SetStateAction<number>>;
  setHistory: React.Dispatch<React.SetStateAction<any>>;
  toggleTheme: () => void;
  clearHistory: () => void;
}

export const Input: React.FC<InputProps> = ({
  inputRef,
  containerRef,
  command,
  history,
  lastCommandIndex,
  setCommand,
  setHistory,
  setLastCommandIndex,
  toggleTheme,
  clearHistory,
}) => {
  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history
      .map(({ command }) => command)
      .filter((command: string) => command);

    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();
      setCommand("");
      setHistory("");
      setLastCommandIndex(0);
    }

    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      clearHistory();
    }

    if (event.key === "Tab") {
      event.preventDefault();
      handleTabCompletion(command, setCommand);
    }

    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault();
      setLastCommandIndex(0);
      await shell(command, setCommand, setHistory, toggleTheme, clearHistory);
      if (containerRef.current) {
        containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index: number = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index: number = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand("");
      }
    }
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(value);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <Prompt />
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className={`flex-grow bg-stone-50 focus:outline-none dark:bg-stone-950 ${
          commandExists(command) || command === ""
            ? "text-orange-500 dark:text-cyan-500"
            : "text-stone-500"
        }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
