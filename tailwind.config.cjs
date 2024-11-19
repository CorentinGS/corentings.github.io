/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	jit: true,
	theme: {
		fontSize: {
			xs: ['0.8125rem', { lineHeight: '1.5rem' }],
			sm: ['0.875rem', { lineHeight: '1.5rem' }],
			base: ['1rem', { lineHeight: '1.75rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '2rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'4xl': ['2rem', { lineHeight: '2.5rem' }],
			'5xl': ['3rem', { lineHeight: '3.5rem' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }]
		},
		fontFamily: {
			sans: [
				'Syne Variable',
				'Karla Variable',
				'Rubik Variable',
				'Inter',
				'Helvetica Neue',
				'Arial Nova',
				'Nimbus Sans',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			]
		}
	},
	variants: {
		extend: {}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
}
