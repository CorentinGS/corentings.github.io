import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";
import compressor from "astro-compressor";

// https://astro.build/config
import astroI18next from "astro-i18next";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://corentings.dev",
  experimental: {
    devOverlay: true
  },
  markdown: {
    shikiConfig: {
      theme: "dracula"
    },
    syntaxHighlight: "shiki"
  },
  integrations: [prefetch(), tailwind(), mdx({
    shikiConfig: {
      theme: "dracula"
    },
    syntaxHighlight: "shiki"
  }), astroI18next(), sitemap({
    lastmod: new Date(),
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en-US",
        fr: "fr-FR",
        de: "de-DE"
      }
    }
  }), compress({
    path: ".vercel/output/static",
    CSS: false,
    HTML: false,
    JavaScript: false,
  }), compressor()],
  output: "server",
  adapter: vercel({functionPerRoute: false})
  //adapter: node({    mode: "standalone"  })
});