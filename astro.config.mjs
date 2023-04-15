import { defineConfig } from "astro/config"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

import critters from "astro-critters"

// https://astro.build/config
import mdx from "@astrojs/mdx"

// https://astro.build/config
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
import sitemap from "@astrojs/sitemap"
import node from "@astrojs/node"

// https://astro.build/config
import compress from "astro-compress"
import compressor from "astro-compressor"

// https://astro.build/config
import astroI18next from "astro-i18next"

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  site: "https://corentings.dev",
  experimental: {
    assets: true
  },
  image: {
    service: "astro/assets/services/sharp"
  },
  markdown: { shikiConfig: { theme: "dracula" }, syntaxHighlight: "shiki" },
  integrations: [
    prefetch(),
    tailwind(),
    mdx({
      shikiConfig: { theme: "dracula" },
      syntaxHighlight: "shiki"
    }),
    astroI18next(),
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          fr: "fr-FR"
        }
      }
    }),
    compress({
      path: ".vercel/output/static",
      css: false
    }),
    compressor()
  ],
  output: "server",
  adapter: vercel()
})