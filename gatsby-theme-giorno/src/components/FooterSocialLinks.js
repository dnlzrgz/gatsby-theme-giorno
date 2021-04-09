import React from 'react';
import FooterSectionMain from './FooterSectionMain';

import FooterSection from './FooterSection';
import FooterSectionTitle from './FooterSectionTitle';

const FooterSocialLinks = ({ links }) => {
	return (
		<FooterSection>
			<header>
				<FooterSectionTitle title="External links" />
			</header>
			<FooterSectionMain>
				{links.map(({ node }) => {
					return (
						<a key={node.id} href={node.url}>
							{node.title}
						</a>
					);
				})}
			</FooterSectionMain>
		</FooterSection>
	);
};

export default FooterSocialLinks;
