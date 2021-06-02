import React, { FC } from "react";

import Section from "./Section";
import GridSectionContentWrapper from "./GridSectionContentWrapper";
import GridItem from "./GridItem";

interface Props {
  module: {
    title: string;
    description: unknown;
    url: {
      title: string;
      url: string;
      external: boolean;
    };
    items: {
      _key: string;
      title: string;
      description: unknown;
    }[];
  };
}

const GridSection: FC<Props> = ({ module }) => {
  const { title, description, items, url } = module;

  return (
    <Section title={title} description={description} url={url}>
      <GridSectionContentWrapper>
        {items.map((item) => (
          <GridItem key={item._key} title={item.title} description={item.description} />
        ))}
      </GridSectionContentWrapper>
    </Section>
  );
};

export default GridSection;
