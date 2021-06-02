import React, { FC } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroImage from "./HeroImage";
import CTA from "./CTA";
import PlainContent from "./PlainContent";

interface Props {
  module: {
    title: string;
    description: unknown;
    whiteText: boolean;
    textAlignment: "center" | "left" | "right";
    cta?: {
      title: string;
      url: string;
      external: boolean;
    };
    image: {
      asset: IGatsbyImageData;
    };
  };
}

const Hero: FC<Props> = ({ module }) => {
  const { title, description, whiteText, textAlignment, image, cta } = module;

  return (
    <section className="grid grid-rows-1 grid-cols-1 items-center">
      <header className={`${whiteText ? "text-white" : "text-gray-900"} z-10`} style={{ gridArea: "1/1" }}>
        <div
          className={`px-8 sm:px-16 lg:px-32 flex flex-col ${
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
      </header>

      <main style={{ gridArea: "1/1" }}>
        <HeroImage asset={image.asset} />
      </main>
    </section>
  );
};

export default Hero;
