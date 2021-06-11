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
      external: boolean;
    };
  };
}

const BlankHero: FC<Props> = ({ module }) => {
  const { title, description, textAlignment, cta } = module;

  return (
    <section className="my-48 px-8 sm:px-16 lg:px-32 bg-background dark:bg-invert-background">
      <div className="text-text dark:text-invert-text z-10" style={{ gridArea: "1/1" }}>
        <div
          className={`flex flex-col ${
            textAlignment === "center"
              ? "text-center items-center"
              : textAlignment === "left"
              ? "text-left items-start mr-8 sm:mr-16 md:mr-20"
              : "text-right items-end mr-8 sm:mr-16 md:mr-20"
          }`}
        >
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>
            <PlainContent content={description} />
          </HeroSubtitle>
          <div>
            {cta && cta.title && cta.url ? <CTA title={cta.title} url={cta.url} external={cta.external} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlankHero;
