import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiTrpc,
  SiPrisma,
  SiVercel,
  SiPostgresql,
  SiStripe,
  SiFigma,
  SiCounterstrike,
} from "react-icons/si";

export const skills = (): JSX.Element => {
  return (
    <div>
      {[
        {
          name: "Javascript",
          icon: SiJavascript,
          color: "#F7DF1E",
        },
        {
          name: "Typescript",
          icon: SiTypescript,
          color: "#3178C6",
        },
        {
          name: "React",
          icon: SiReact,
          color: "#61DAFB",
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
        },
        {
          name: "Astro",
          icon: SiAstro,
          color: "#BC52EE",
        },
        {
          name: "Tailwind",
          icon: SiTailwindcss,
          color: "#06B6D4",
        },
        {
          name: "tRPC",
          icon: SiTrpc,
          color: "#2596BE",
        },
        {
          name: "Prisma",
          icon: SiPrisma,
          color: "#2D3748",
        },
        {
          name: "Vercel",
          icon: SiVercel,
        },
        {
          name: "PostreSQL",
          icon: SiPostgresql,
          color: "#4169E1",
        },
        {
          name: "Stripe",
          icon: SiStripe,
          color: "#008CDD",
        },
        {
          name: "Figma",
          icon: SiFigma,
          color: "#F24E1E",
        },
        {
          name: "Counter-Strike Pro (not really)",
          icon: SiCounterstrike,
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
    </div>
  );
};
