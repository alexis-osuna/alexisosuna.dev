import config from "../../config.json";

export const about = (): JSX.Element => {
  return (
    <div>
      <p>
        Hi, my name is{" "}
        <span className="text-orange-500 dark:text-cyan-500">
          {config.name}
        </span>
        .
      </p>
      <p>
        {
          "I'm a web developer with experience building full stack applications using react and next.js."
        }
      </p>
      <p className="mb-4">
        {" If you want to see a full list of my skills type: 'skills'."}
      </p>
      <p>More about me:</p>
      <p>{"'resume' - my latest resume."}</p>
      <p>{"'summary' - a short summary."}</p>
    </div>
  );
};
