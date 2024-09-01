import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compressor from 'astro-compressor';
import { defineConfig, sharpImageService, squooshImageService } from 'astro/config';
import { remarkReadingTime } from './src/utils/readTime.ts';

import partytown from "@astrojs/partytown";

import playformCompress from '@playform/compress';

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
    integrations: [partytown(), tailwind(), mdx({
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'material-theme-palenight',
            wrap: true
        },
        drafts: true
    }), sitemap({
        lastmod: new Date()
    }), (await import("@playform/compress")).default({
		CSS: true,
		HTML: true,
		Image: false,
		JavaScript: false,
		SVG: true,
	}), compressor()],
    output: 'static'
    // adapter: cloudflare()
});