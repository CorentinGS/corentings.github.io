import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";
import image from "@astrojs/image";

// https://astro.build/config

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";
import serviceWorker from "astrojs-service-worker";
import compressor from "astro-compressor";

// https://astro.build/config
import astroI18next from "astro-i18next";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://corentings.vercel.app/",
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    prefetch(),
    sitemap(),
    astroI18next(),
    serviceWorker(),
    critters({
      path: ".vercel/output/static",
    }),
    compress({
      path: ".vercel/output/static",
      css: false,
    }),
    compressor(),
  ],
  output: "static",
  adapter: vercel(),
});
