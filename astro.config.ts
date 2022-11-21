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

import serviceWorker from "astrojs-service-worker"

// https://astro.build/config
export default defineConfig({
  site: "https://corentings.vercel.app",
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      })]
  },
  integrations: [tailwind(), image(), mdx(), prefetch(), sitemap(), compress(), serviceWorker()],
});