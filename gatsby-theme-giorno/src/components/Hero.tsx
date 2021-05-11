import React, { FC } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroImage from "./HeroImage";
import CTA from "./CTA";

interface Props {
  module: {
    title: string;
    subtitle: string;
    whiteText: boolean;
    cta: {
      title: string;
      url: string;
    };
    image: {
      asset: IGatsbyImageData;
    };
  };
}

const Hero: FC<Props> = ({ module }) => {
  const { title, subtitle, whiteText, image, cta } = module;

  return (
    <section className="grid grid-rows-1 grid-cols-1 items-center">
      <header
        className={`${whiteText ? "text-white" : "text-gray-900"} z-10 flex flex-col items-center`}
        style={{ gridArea: "1/1" }}
      >
        <HeroTitle>{title}</HeroTitle>
        {subtitle ? <HeroSubtitle>{subtitle}</HeroSubtitle> : null}
        {cta && cta.title ? <CTA title={cta.title} url={cta.url} /> : null}
      </header>

      <main style={{ gridArea: "1/1" }}>
        <HeroImage asset={image.asset} />
      </main>
    </section>
  );
};

export default Hero;
