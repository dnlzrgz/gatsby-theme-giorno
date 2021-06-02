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
      <div className="flex items-center justify-center mt-8 xl:mt-0 py-12 sm:py-0">
        <CodeBlock node={code} />
      </div>
    </Section>
  );
};

export default CodeSection;
