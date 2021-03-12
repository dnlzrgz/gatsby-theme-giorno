import React from 'react';
import { graphql } from 'gatsby';

const Blog = ({ data }) => {
	return <h1>Blog page</h1>;
};

// TODO: Order posts by date
export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		posts: allSanityPost(
			skip: $skip
			limit: $limit
			sort: { fields: publishedAt, order: ASC }
		) {
			edges {
				node {
					slug {
						current
					}
				}
			}
		}
	}
`;

export default Blog;
