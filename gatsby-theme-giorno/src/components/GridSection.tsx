import React, { FC } from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import GridItem from "./GridItem";

interface Props {
  module: {
    title: string;
    description: string;
    items: {
      _key: string;
      title: string;
      content: string;
    }[];
  };
}

const GridSection: FC<Props> = ({ module }) => {
  const { title, description, items } = module;

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
          {description ? <SectionDescription>{description}</SectionDescription> : null}
        </SectionHeader>
        <main className="flex items-center justify-center sm:py-12 lg:py-0">
          <div className="grid grid-cols-1 mt-12 md:mt-0 sm:grid-cols-2 gap-12">
            {items.map((item) => (
              <GridItem key={item._key} title={item.title} content={item.content} />
            ))}
          </div>
        </main>
      </div>
    </Section>
  );
};

export default GridSection;