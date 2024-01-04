import config from "../../config.json";

export const resume = (): string => {
  window.open(`${config.resume_url}`);
  return "Opening resume...";
};
