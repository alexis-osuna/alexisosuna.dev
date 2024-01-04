import config from "../../config.json";

export const linkedin = (): string => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return "Opening linkedin...";
};
