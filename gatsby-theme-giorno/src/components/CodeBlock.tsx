import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula as style } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  node: {
    language: string;
    code: string;
  };
}

const CodeBlock: FC<Props> = ({ node }) => {
  return (
    <div className="w-80 mx-auto sm:w-full sm:mx-0">
      <div className="flex justify-between items-center py-3 px-5 bg-gray-900 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 rounded-full border-red-500 bg-red-500" />
          <div className="w-4 h-4 border-2 rounded-full border-white-500 bg-white" />
          <div className="w-4 h-4 border-2 rounded-full border-green-500 bg-green-500" />
        </div>
        <p className="text-lg self-start text-gray-50">{node.language}</p>
      </div>

      <div className="text-lg font-mono font-light overflow-y-visible">
        <SyntaxHighlighter language={node.language} style={style}>
          {node.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
