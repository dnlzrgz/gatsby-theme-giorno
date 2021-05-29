import React, { FC } from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import SectionLink from "./SectionLink";
import PlainContent from "./PlainContent";
import CodeBlock from "./CodeBlock";

interface Props {
  module: {
    title: string;
    description: unknown;
    url: {
      title: string;
      url: string;
      external: boolean;
    };
    code: {
      language: string;
      code: string;
    };
  };
}

const CodeSection: FC<Props> = ({ module }) => {
  const { title, description, url, code } = module;

  return (
    <Section>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-24">
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
          <SectionDescription>
            <PlainContent content={description} />
          </SectionDescription>
          <SectionLink url={url} />
        </SectionHeader>
        <main className="flex items-center justify-center mt-8 xl:mt-0 py-12 sm:py-0">
          <CodeBlock node={code} />
        </main>
      </div>
    </Section>
  );
};

export default CodeSection;
