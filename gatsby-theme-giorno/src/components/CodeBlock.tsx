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
    <div className="text-lg my-4">
      <div className="flex justify-between items-center py-5 px-5 bg-gray-900 rounded-t-xl">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 rounded-full border-red-500 bg-red-500" />
          <div className="w-4 h-4 border-2 rounded-full border-white-500 bg-white" />
          <div className="w-4 h-4 border-2 rounded-full border-green-500 bg-green-500" />
        </div>
        <p className="self-start text-gray-50">{node.language}</p>
      </div>
      <SyntaxHighlighter showLineNumbers={true} wrapLines={true} language={node.language} style={style}>
        {node.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
