import React, { FC } from "react";

import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import CTA from "./CTA";
import PlainContent from "./PlainContent";

interface Props {
  module: {
    title: string;
    description: unknown;
    textAlignment: string;
    cta?: {
      title: string;
      url: string;
    };
  };
}

const BlankHero: FC<Props> = ({ module }) => {
  const { title, description, textAlignment, cta } = module;

  return (
    <section className="grid grid-rows-1 grid-cols-1 items-center py-32 sm:py-40">
      <header className="text-gray-900 z-10" style={{ gridArea: "1/1" }}>
        <div
          className={`px-8 md:px-32 flex flex-col ${
            textAlignment === "center"
              ? "text-center items-center"
              : textAlignment === "left"
              ? "text-left items-start mr-8 sm:mr-16 md:mr-20 lg:mr-96"
              : "text-right items-end mr-8 sm:mr-16 md:mr-20 lg:ml-96"
          }`}
        >
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>
            <PlainContent content={description} />
          </HeroSubtitle>
          <div>{cta && cta.title ? <CTA title={cta.title} url={cta.url} /> : null}</div>
        </div>
      </header>
    </section>
  );
};

export default BlankHero;
