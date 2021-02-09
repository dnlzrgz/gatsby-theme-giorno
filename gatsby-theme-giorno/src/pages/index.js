import React from 'react';
import { graphql } from 'gatsby';

import pageBuilder from '../utils/pageBuilder';

const Index = ({ data }) => {
	return <>{pageBuilder(data.page.pageBuilder)}</>;
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
