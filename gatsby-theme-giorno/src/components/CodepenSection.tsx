import React, { FC } from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import PlainContent from "./PlainContent";
import SectionLink from "./SectionLink";
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
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <div className="pr-8 sm:pr-16 md:pr-32 lg:pr-72">
          <SectionDescription>
            <PlainContent content={description} />
          </SectionDescription>
          <SectionLink url={url} />
        </div>
      </SectionHeader>
      <main className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
        {codepens.map(({ url }) => (
          <CodepenEmbed key={url} url={url} />
        ))}
      </main>
    </Section>
  );
};

export default CodepenSection;
