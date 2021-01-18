import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ node }) => {
	return (
		<SyntaxHighlighter language={node.language} style={style}>
			{node.code}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
