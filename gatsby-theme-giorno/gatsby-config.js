const path = require('path');
require('dotenv').config({
	path: path.resolve('../.env'),
});

module.exports = {
	siteMetadata: {
		siteUrl: `https://giorno-demo.netlify.app`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: process.env.SANITY_PROJECT_ID,
				dataset: process.env.SANITY_DATASET_NAME,
				token: process.env.SANITY_TOKEN,
				watchMode: true,
				overlayDrafts: true,
			},
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Archivo Black',
							subsets: ['latin'],
							variants: ['500', '600', '700'],
							fontDisplay: 'swap',
							strategy: 'selfHosted',
						},
						{
							family: 'Judson',
							subsets: ['latin'],
							variants: ['300', '400', '500', '600'],
							fontDisplay: 'swap',
							strategy: 'selfHosted',
						},
					],
				},
			},
		},
		`gatsby-plugin-sitemap`,
	],
};
