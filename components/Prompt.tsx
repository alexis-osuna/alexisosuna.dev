import React from "react";
import config from "../config.json";

export const Prompt = () => {
  return (
    <div>
      <span className="text-yellow-500 dark:text-sky-500">
        {config.prompt.username}
      </span>

      <span className="text-stone-500">@</span>

      <span className="text-amber-500 dark:text-blue-500">
        {config.prompt.hostname}
      </span>

      <span className="text-stone-500">:$ ~ </span>
    </div>
  );
};

export default Prompt;
