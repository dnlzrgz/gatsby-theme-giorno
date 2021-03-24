const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: colors.lightBlue[500],
				secondary: colors.lightBlue[600],
				accent: colors.pink[500],
				background: colors.white,
				'invert-background': colors.coolGray[900],
				text: colors.coolGray[900],
				'invert-text': colors.white,
				heading: colors.lightBlue[900],
				neutral: colors.coolGray[700],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
