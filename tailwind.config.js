/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				text: '#e2e3fd',
				background: '#02031d',
				'background-secondary': '#0e0f29',
				'primary-button': '#fdfdfc',
				'secondary-button': '#18181b',
				accent: '#ef5ff7',
			},
			fontFamily: {
				primary: ['Sono', 'sans-serif'],
				secondary: ['Red Hat Mono', 'monospace'],
			},
		},
	},
	plugins: [],
}
