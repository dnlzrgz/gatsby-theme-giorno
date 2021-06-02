import React, { FC } from "react";
import PlainContent from "./PlainContent";

interface Props {
  content: unknown;
}

const SectionDescription: FC<Props> = ({ content }) => {
  return (
    <div className="text-xl sm:text-2xl max-w-prose">
      <PlainContent content={content} />
    </div>
  );
};

export default SectionDescription;
