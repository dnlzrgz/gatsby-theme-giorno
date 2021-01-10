import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => {
	return <h1>{data.page.title}</h1>;
};

export const query = graphql`
	query($slug: String!) {
		page: sanityPage(slug: { current: { eq: $slug } }) {
			title
		}
	}
`;

export default Page;
