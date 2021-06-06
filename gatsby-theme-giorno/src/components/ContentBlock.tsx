import React, { FC } from "react";
import BlockContent from "@sanity/block-content-to-react";

import CodeBlock from "./CodeBlock";
import ImageBlock from "./ImageBlock";

const serializers = {
  types: {
    // eslint-disable-next-line react/display-name
    block: (props) => {
      switch (props.node.style) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "blockquote":
          return null;
        case "normal":
          return <p className="text-xl max-w-prose">{props.children}</p>;
        default:
          return null;
      }
    },
    code: CodeBlock,
    image: ImageBlock,
  },
};

interface Props {
  content: unknown;
}

const ContentBlock: FC<Props> = (content) => {
  return <BlockContent blocks={content.content} serializers={serializers} />;
};

export default ContentBlock;
