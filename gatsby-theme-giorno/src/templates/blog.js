import React from 'react';
import { graphql, Link } from 'gatsby';

import PostCard from '../components/PostCard';

const Blog = ({ data, pageContext }) => {
	const posts = data.posts.edges;
	const { previousPagePath, nextPagePath } = pageContext;

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			{posts.map(({ node }) => (
				<PostCard post={node} />
			))}
			<div>
				{previousPagePath ? (
					<Link to={pageContext.previousPagePath}>Prev</Link>
				) : null}
				{nextPagePath ? <Link to={pageContext.nextPagePath}>Next</Link> : null}
			</div>
		</div>
	);
};

export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		posts: allSanityPost(
			skip: $skip
			limit: $limit
			sort: { fields: publishedAt, order: ASC }
		) {
			edges {
				node {
					title
					publishedAt(fromNow: true)
					_rawContent
					slug {
						current
					}
					categories {
						title
					}
					author {
						name
						slug {
							current
						}
					}
				}
			}
		}
	}
`;

export default Blog;
