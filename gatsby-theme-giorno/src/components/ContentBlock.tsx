/* eslint-disable react/display-name */
import React, { FC } from "react";
import BlockContent from "@sanity/block-content-to-react";

import CodeBlock from "./CodeBlock";
import ImageBlock from "./ImageBlock";
import CodepenEmbed from "./CodepenEmbed";

const serializers = {
  types: {
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
    codepen: (props) => {
      return <CodepenEmbed url={props.node.url} />;
    },
    code: (props) => {
      return <CodeBlock node={props.node} />;
    },
    image: (props) => {
      console.log({ ...props });
      return <ImageBlock asset={props.node.asset} altText="" />;
    },
  },
};

interface Props {
  content: unknown;
}

const ContentBlock: FC<Props> = (content) => {
  return <BlockContent blocks={content.content} serializers={serializers} />;
};

export default ContentBlock;
