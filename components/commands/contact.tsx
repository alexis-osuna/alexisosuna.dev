import config from "../../config.json";

export const contact = (): string => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};
