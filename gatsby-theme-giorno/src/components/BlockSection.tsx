import React, { FC } from "react";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import ContentBlock from "./ContentBlock";
import PlainContent from "./PlainContent";

interface Props {
  module: {
    title: string;
    description: unknown;
    rawContent: unknown;
  };
}

const BlockSection: FC<Props> = ({ module }) => {
  const { title, description, rawContent: content } = module;

  return (
    <Section>
      <header>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>
          <PlainContent content={description} />
        </SectionDescription>
      </header>
      <main className="flex flex-col items-center mt-12">
        <ContentBlock content={content} />
      </main>
    </Section>
  );
};

export default BlockSection;
