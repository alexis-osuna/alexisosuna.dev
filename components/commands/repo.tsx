import config from "../../config.json";

export const repo = (): string => {
  window.open(`${config.repo}`);
  return "Opening Github repository...";
};
