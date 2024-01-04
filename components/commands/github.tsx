import config from "../../config.json";

export const github = (): string => {
  window.open(`https://github.com/${config.social.github}/`);
  return "Opening github...";
};
