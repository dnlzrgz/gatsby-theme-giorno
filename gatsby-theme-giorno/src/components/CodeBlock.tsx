import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula as style } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  node: {
    language: string;
    code: unknown;
  };
}

const CodeBlock: FC<Props> = ({ node }) => {
  return (
    <SyntaxHighlighter language={node.language} style={style}>
      {node.code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
