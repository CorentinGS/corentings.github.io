import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import { defineConfig, sharpImageService, squooshImageService } from 'astro/config'

import cloudflare from '@astrojs/cloudflare';


import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
	site: 'https://corentings.dev',
	image: {
		service: process.env.NODE_ENV === 'production' ? sharpImageService() : squooshImageService()
	},
	prefetch: {
		prefetchAll: false,
		defaultStrategy: 'hover'
	},
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		tailwind(),
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'material-theme-palenight',
				wrap: true
			},
			drafts: true
		}),
		sitemap({
			lastmod: new Date(),
		}),
		compress({
			path: 'dist',
			CSS: false,
			HTML: false,
			JavaScript: false
		}),
		compressor()
	],
	output: 'hybrid',
	adapter: cloudflare()
})
