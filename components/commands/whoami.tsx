import config from "../../config.json";

export const whoami = (): string => {
  return `${config.prompt.username}`;
};
