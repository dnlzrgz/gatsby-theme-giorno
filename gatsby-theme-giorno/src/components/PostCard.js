import React from 'react';
import { Link } from 'gatsby';

import ContentBlock from './ContentBlock';

const PostCard = ({ post }) => {
	if (!post._rawContent.length) return null;

	return (
		<article className="md:max-w-5xl border shadow flex flex-col gap-6 py-6 px-9">
			<header>
				<Link to={`/blog/${post.slug.current}`}>
					<h1 className="text-3xl font-semibold">{post.title}</h1>
				</Link>
			</header>
			<main>
				<ContentBlock content={post._rawContent[0]} />
			</main>
			<footer>
				<p>
					Written by{' '}
					<Link to={`/authors/${post.author.slug.current}`}>
						{post.author.name}
					</Link>
					, {post.publishedAt}.
				</p>
			</footer>
		</article>
	);
};

export default PostCard;
