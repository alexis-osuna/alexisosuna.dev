export const duckduckgo = (args: string[]): string => {
  window.open(`https://duckduckgo.com/?q=${args.join(" ")}`);
  return `Searching duckduckgo for ${args.join(" ")}...`;
};
