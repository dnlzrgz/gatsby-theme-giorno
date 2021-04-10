import React from 'react';
import PropTypes from 'prop-types';

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

FooterSocialLinks.propTypes = {
	links: PropTypes.array.isRequired,
};

export default FooterSocialLinks;
