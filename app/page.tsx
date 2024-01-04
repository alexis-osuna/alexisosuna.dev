"use client";

import { useCallback, useEffect, useRef } from "react";
import { History, Input } from "@/components";
import { banner } from "@/components/commands";
import { useHistory, useTheme } from "@/hooks";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const containerRef = useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const { toggleTheme } = useTheme();

  const init = useCallback(() => setHistory(banner()), []);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <main
      className="h-full bg-stone-50 text-sm text-stone-950 sm:text-base dark:bg-stone-950 dark:text-stone-50"
      onClick={onClickAnywhere}
    >
      <div className="h-full overflow-hidden rounded p-4 sm:p-8 ">
        <div ref={containerRef} className="h-full overflow-y-auto">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            lastCommandIndex={lastCommandIndex}
            history={history}
            setCommand={setCommand}
            setLastCommandIndex={setLastCommandIndex}
            setHistory={setHistory}
            toggleTheme={toggleTheme}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </main>
  );
}
