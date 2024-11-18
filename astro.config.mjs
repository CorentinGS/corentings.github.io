import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import compressor from 'astro-compressor'
import { defineConfig,  } from 'astro/config'
import { remarkReadingTime } from './src/utils/readTime.ts'

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://corentings.dev',
    build: {
        inlineStylesheets: 'never'
    },
    prefetch: true,
    markdown: {
        remarkPlugins: [remarkReadingTime],
        drafts: true,
        shikiConfig: {
            theme: 'material-theme-palenight',
            wrap: true
        }
    },
    integrations: [tailwind(), react(), icon(), mdx({
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'material-theme-palenight',
            wrap: true
        },
        drafts: true
        }), sitemap({
        lastmod: new Date()
        }), compressor()],
    output: 'static'
    // adapter: cloudflare()
})