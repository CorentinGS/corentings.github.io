import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import compressor from 'astro-compressor'
import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/utils/readTime.ts'

import react from '@astrojs/react'
import icon from 'astro-icon'

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://corentings.dev',

  prefetch: {
      defaultStrategy: 'viewport',
      prefetchAll: true
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
      react(),
      icon(),
      mdx({
          syntaxHighlight: 'shiki',
          shikiConfig: {
              theme: 'material-theme-palenight',
              wrap: true
          },
          drafts: true
      }),
      sitemap({
          lastmod: new Date()
      }),
      compressor()
	],

  // adapter: cloudflare()
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
})