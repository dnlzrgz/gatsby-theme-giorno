import React from 'react';
import { Link, graphql, navigate } from 'gatsby';

import useSanityConfig from '../hooks/use-sanity-config';

const Blog = ({ data }) => {
	const { blogPage } = useSanityConfig();
	const { allSanityPost } = data;
	const posts = allSanityPost.nodes;

	if (!blogPage) {
		navigate('/404');
	}

	return (
		<ul className="h-screen flex flex-col gap-9 pt-28 px-6">
			{posts.map((post) => {
				return (
					<li key={post._id}>
						<Link to={`/blog/${post.slug.current}`}>
							<h2 className="text-4xl">{post.title}</h2>
						</Link>
						{post.description ? <p>{post.description}</p> : null}
					</li>
				);
			})}
		</ul>
	);
};

export const query = graphql`
	query {
		allSanityPost {
			nodes {
				_id
				_key
				title
				description
				public
				publishedAt(fromNow: true)
				slug {
					current
				}
			}
		}
	}
`;

export default Blog;
