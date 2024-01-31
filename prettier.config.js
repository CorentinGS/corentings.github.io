/** @type {import("prettier").Config} */
module.exports = {
	...require('prettier-config-standard'),
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	useTabs: true,

	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
