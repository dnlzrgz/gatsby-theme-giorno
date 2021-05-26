import React, { FC } from "react";

import CTA from "./CTA";

interface Props {
  url: {
    title: string;
    url: string;
    external: boolean;
  };
}

const SectionLink: FC<Props> = ({ url }) => {
  return url && url?.title && url?.url ? (
    <div className="flex flex-col items-center md:items-start">
      <CTA title={url.title} url={url.url} external={url.external} />
    </div>
  ) : null;
};

export default SectionLink;
