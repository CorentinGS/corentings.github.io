import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import astroI18next from 'astro-i18next'
import {defineConfig, sharpImageService, squooshImageService} from 'astro/config'

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
		astroI18next(),
		sitemap({
			lastmod: new Date(),
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en-US',
					fr: 'fr-FR',
					de: 'de-DE'
				}
			}
		}),
		compress({
			path: '.vercel/output/static',
			CSS: false,
			HTML: false,
			JavaScript: false
		}),
		compressor()
	],
	output: 'server',
	adapter: vercel({
		functionPerRoute: false,
		imageService: false,
		devImageService: 'squoosh',
	})
})
