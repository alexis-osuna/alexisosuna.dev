export const bing = (args: string[]): string => {
  window.open(`https://bing.com/search?q=${args.join(" ")}`);
  return `Wow, really? You are using bing for ${args.join(" ")}?`;
};
