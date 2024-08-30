/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	jit: true,
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Syne Variable',
					'Karla Variable',
					'Rubik Variable',
					'Nunito sans',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				]
			},
			animation: {
				// Bounces 5 times 1s equals 5 seconds
				'bounce-short': 'bounce 3s ease-in-out 2'
			}
		}
	},
	variants: {
		extend: {}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('daisyui')
	],

	daisyui: {
		themes: [
			{
				light: {
					primary: '#38555F',
					secondary: '#6d4c41',
					accent: '#f39c12',
					neutral: '#40404A',
					'base-200': '#f1f1f1',
					'base-100': '#FCFCFC',
					info: '#bf55ec',
					success: '#72E9C1',
					warning: '#F6D73C',
					error: '#E83B55',
					'base-content': '#333333',
					'--rounded-btn': '1.9rem'
				}
			},
			{
				dark: {
					primary: '#5FCCC7',
					secondary: '#6d4c41',
					accent: '#f39c12',
					neutral: '#40404A',
					'base-100': '#1c1c1e',
					'base-200': '#1a1a1a',
					info: '#bf55ec',
					success: '#72E9C1',
					warning: '#F6D73C',
					error: '#E83B55',
					'base-content': '#f2f2f7',
					'--rounded-btn': '1.9rem'
				}
			}
		]
	}
}
