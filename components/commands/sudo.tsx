export const sudo = async (args?: string[]): Promise<string> => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // ...I'm sorry
  return `Permission denied: lil bro tryna execute ${
    args?.length ? args.join(" ") : "sudo"
  } hahaha`;
};
