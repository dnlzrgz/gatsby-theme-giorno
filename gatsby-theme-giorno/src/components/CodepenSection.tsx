import React, { FC } from "react";

import Section from "./Section";
import GridSectionContentWrapper from "./GridSectionContentWrapper";
import CodepenEmbed from "./CodepenEmbed";

interface Props {
  module: {
    _key: string;
    _type: string;
    title: string;
    description: unknown;
    url: {
      title: string;
      url: string;
      external: boolean;
    };
    codepens: {
      url: string;
    }[];
  };
}

const CodepenSection: FC<Props> = ({ module }) => {
  const { title, description, url, codepens } = module;

  return (
    <Section title={title} description={description} url={url} fullWidth>
      <GridSectionContentWrapper>
        {codepens.map(({ url }) => (
          <CodepenEmbed key={url} url={url} />
        ))}
      </GridSectionContentWrapper>
    </Section>
  );
};

export default CodepenSection;
