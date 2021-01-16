import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
	types: {
		block(props) {
			switch (props.node.style) {
				case 'h1':
				case 'h2':
				case 'h3':
				case 'h4':
				case 'blockquote':
					return null;
				case 'normal':
					return <p className="max-w-prose my-2">{props.children}</p>;
				default:
					return null;
			}
		},
	},
};

const ContentBlock = (content) => {
	return (
		<BlockContent
			className="flex flex-col items-center"
			blocks={content.content}
			serializers={serializers}
		/>
	);
};

export default ContentBlock;
