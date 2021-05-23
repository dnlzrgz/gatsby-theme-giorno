import React, { FC } from "react";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {};

interface Props {
  content: unknown;
}

const PlainContent: FC<Props> = (content) => {
  return <BlockContent blocks={content.content} serializers={serializers} />;
};

export default PlainContent;
