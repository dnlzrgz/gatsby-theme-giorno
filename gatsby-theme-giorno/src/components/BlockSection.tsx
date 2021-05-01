import React, { FC } from "react";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import ContentBlock from "./ContentBlock";

interface Props {
  module: {
    title: string;
    description: string;
    rawContent: unknown;
  };
}

const BlockSection: FC<Props> = ({ module }) => {
  const { title, description, rawContent: content } = module;

  return (
    <Section>
      <header>
        <SectionTitle>{title}</SectionTitle>
        {description && <SectionDescription>{description}</SectionDescription>}
      </header>
      <main className="flex flex-col items-center justify-items-center">
        <ContentBlock content={content} />
      </main>
    </Section>
  );
};

export default BlockSection;
