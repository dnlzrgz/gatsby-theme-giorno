import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = (props) => {
	return (
		<SyntaxHighlighter language={props.node.language} style={style}>
			{props.node.code}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
