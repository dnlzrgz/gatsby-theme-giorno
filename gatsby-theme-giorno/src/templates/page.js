import React from 'react';
import { graphql } from 'gatsby';

import pageBuilder from '../utils/pageBuilder';

const Page = ({ data }) => {
	return <>{pageBuilder(data.page.pageBuilder)}</>;
};

export const query = graphql`
	query($slug: String!) {
		page: sanityPage(slug: { current: { eq: $slug } }) {
			title
			...PageBuilder
		}
	}
`;

export default Page;
