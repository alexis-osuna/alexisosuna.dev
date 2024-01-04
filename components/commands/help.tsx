import * as commands from "./index";

export const help = (args: string[]): JSX.Element => {
  const c = Object.keys(commands)
    .sort()
    .reduce((acc, curr, index) => {
      if ((index + 1) % 7 === 0) {
        return acc + curr + "\n";
      } else {
        return acc + curr + " ";
      }
    }, "");
  return (
    <div className="flex flex-col">
      <p className="mb-4">Welcome! Here are all the available commands:</p>
      <p className="mb-4">{c}</p>
      <p>[tab]: trigger completion.</p>
      <p>[ctrl+l]/clear: clear terminal.</p>
      <p>{"Type 'theme' to toggle between themes."}</p>
    </div>
  );
};
