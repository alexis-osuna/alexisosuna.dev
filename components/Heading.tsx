import React from "react";

interface Props {
  title: string;
  description: string;
}

const Heading: React.FC<Props> = ({ title, description }) => {
  return (
    <section className="mb-8">
      <h1 className="mb-4 text-2xl font-bold sm:text-4xl">{title}</h1>
      <p className="text-neutral-500">{description}</p>
    </section>
  );
};

export default Heading;
