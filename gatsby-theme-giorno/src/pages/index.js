import React from 'react';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
	console.log(data);
	return <h1>{data.page.title}</h1>;
};

export const query = graphql`
	query {
		page: sanityPage(slug: { current: { eq: "index" } }) {
			title
			...PageBuilder
		}
	}
`;

export default Index;
