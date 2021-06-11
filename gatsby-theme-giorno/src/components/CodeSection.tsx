import React, { FC } from "react";

import Section from "./Section";
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
    <Section title={title} description={description} url={url}>
      <CodeBlock node={code} />
    </Section>
  );
};

export default CodeSection;
