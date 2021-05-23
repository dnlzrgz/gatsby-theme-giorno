import React, { FC } from "react";

import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import CTA from "./CTA";
import PlainContent from "./PlainContent";

interface Props {
  module: {
    title: string;
    description: unknown;
    cta?: {
      title: string;
      url: string;
    };
  };
}

const BlankHero: FC<Props> = ({ module }) => {
  const { title, description, cta } = module;

  return (
    <section className="h-screen grid grid-rows-1 grid-cols-1 items-center">
      <header className="text-gray-900 z-10" style={{ gridArea: "1/1" }}>
        <div className="px-6 md:px-24 flex flex-col items-center">
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>
            <PlainContent content={description} />
          </HeroSubtitle>
          {cta && cta.title ? <CTA title={cta.title} url={cta.url} /> : null}
        </div>
      </header>
    </section>
  );
};

export default BlankHero;
