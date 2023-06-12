/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				'5vh': '5vh',
				'30vh': '30vh',
				'40vh': '40vh',
				'70vh': '70vh'
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif']
			},
			screens: {
				xss: '350px'
			}
		}
	},

	plugins: []
};

module.exports = config;
