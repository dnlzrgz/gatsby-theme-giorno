const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: colors.lightBlue[500],
				'darker-primary': colors.lightBlue[600],
				accent: colors.pink[500],
				'darker-accent': colors.pink[600],
				background: colors.white,
				'invert-background': colors.coolGray[800],
				text: colors.coolGray[900],
				'invert-text': colors.white,
				footer: colors.coolGray[600],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
