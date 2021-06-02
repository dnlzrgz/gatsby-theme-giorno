import React, { FC } from "react";

import Section from "./Section";
import ContentBlock from "./ContentBlock";

interface Props {
  module: {
    title: string;
    description: unknown;
    url: {
      title: string;
      url: string;
      external: boolean;
    };
    rawContent: unknown;
  };
}

const BlockSection: FC<Props> = ({ module }) => {
  const { title, description, url, rawContent: content } = module;

  return (
    <Section title={title} description={description} url={url} fullWidth>
      <div className="flex flex-col items-center">
        <ContentBlock content={content} />
      </div>
    </Section>
  );
};

export default BlockSection;
