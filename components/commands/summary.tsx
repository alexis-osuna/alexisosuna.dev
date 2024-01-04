import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import config from "../../config.json";

export const summary = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-8 py-8 md:flex-row md:p-8">
      <img
        src="https://preview.redd.it/fgyd78gzdd971.gif?width=540&auto=webp&s=7e20fc54294b2fe4d3cea524af1385590765aeb2"
        className="max-w-sm"
        alt="Alexis Osuna"
      />
      <div>
        <div className="mb-4">
          <p className="font-bold text-amber-500 dark:text-blue-500">
            @alexis-osuna
          </p>
          <p>-------------</p>
          <p className="mb-2 text-stone-500">Contact</p>
          <p>
            <span className="font-bold text-amber-500 dark:text-blue-500">
              Email:{" "}
            </span>{" "}
            alexisosuna@pm.me
          </p>
          <p>
            <span className="font-bold text-amber-500 dark:text-blue-500">
              GitHub:{" "}
            </span>{" "}
            <a
              className="hover:underline"
              href={`https://github.com/${config.social.github}/`}
            >
              alexis-osuna
            </a>
          </p>
          <p>
            <span className="font-bold text-amber-500 dark:text-blue-500">
              LinkedIn:{" "}
            </span>{" "}
            <a
              className="hover:underline"
              href={`https://www.linkedin.com/in/${config.social.linkedin}/`}
            >
              alexis-osuna
            </a>
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-stone-500">Tools</p>
          {[
            {
              name: "Typescript",
              icon: SiTypescript,
              color: "#3178C6",
            },
            {
              name: "Next.js",
              icon: SiNextdotjs,
            },
            {
              name: "Tailwind",
              icon: SiTailwindcss,
              color: "#06B6D4",
            },
            {
              name: "Vercel",
              icon: SiVercel,
            },
          ].map((value, index) => (
            <div key={index} className="flex items-center space-x-1">
              <value.icon
                className={value.color ? "" : "dark:text-stone-50"}
                style={value.color ? { color: value.color } : {}}
              />
              <p>{value.name}</p>
            </div>
          ))}
          <p>
            <span className="font-bold text-amber-500 dark:text-blue-500">
              Repo:{" "}
            </span>{" "}
            <a className="hover:underline" href={config.repo}>
              {config.repo}
            </a>
          </p>
        </div>
        <p>© {new Date().getFullYear()} Alexis Osuna</p>
      </div>
    </div>
  );
};
