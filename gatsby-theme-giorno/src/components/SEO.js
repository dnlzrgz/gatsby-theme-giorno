import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useSanityConfig from '../hooks/use-sanity-config';

const SEO = ({ title, path, description, image }) => {
	const {
		global: {
			title: defaultTitle,
			description: defaultDescription,
			twitterUsername,
			siteURL,
			image: defaultImage,
		},
	} = useSanityConfig();

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription[0]?._rawChildren[0]?.text,
		twitterUsername,
		url: new URL(path || '', siteURL),
		image: image || defaultImage?.asset?.gatsbyImageData?.images?.fallback?.src,
	};

	return (
		<Helmet>
			<title>{seo.title}</title>
			<link rel="canonical" href={seo.url} />
			<meta name="description" content={seo.description} />
			{seo.image && <meta name="image" content={seo.image} />}
			<meta name="robots" content="index, follow" />

			<meta property="og:url" content={seo.url} />
			<meta property="og:title" content={seo.title} />
			{image && <meta property="og:image" content={image} />}
			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}

			<meta name="twitter:title" content={seo.title} />
			{twitterUsername && (
				<meta name="twitter:creator" content={twitterUsername} />
			)}
			{seo.description && (
				<meta name="twitter:description" content={seo.description} />
			)}
			<meta name="twitter:card" content="summary_large_image" />
			{seo.image && <meta name="twitter:image" content={seo.image} />}
		</Helmet>
	);
};

SEO.propTypes = {
	title: PropTypes.string,
	path: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
};

export default SEO;
