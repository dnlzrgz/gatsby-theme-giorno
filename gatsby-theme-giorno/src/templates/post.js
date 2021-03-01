import React from 'react';
import { graphql } from 'gatsby';

const Post = ({ data }) => {
	return <h1 className="pt-36 text-4xl">{data.post.title}</h1>;
};

export const query = graphql`
	query($slug: String!) {
		post: sanityPost(slug: { current: { eq: $slug } }) {
			_id
			title
			publishedAt
			public
			slug {
				current
			}
			author {
				name
				slug {
					current
				}
			}
			categories {
				_id
				_type
				title
				description
			}
			content {
				style
				list
				_type
				children {
					_key
					_type
					marks
					text
				}
			}
		}
	}
`;

export default Post;
