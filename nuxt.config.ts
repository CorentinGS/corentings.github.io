import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  target: "static",

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],

  buildModules: ["unplugin-icons/nuxt" ],

  tailwindcss: {
    // @ts-ignore
    jit: true,
  },

  components: true,

  image: {
    staticFilename: "[name].[ext]",
  },

  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
    ],
  },

  nitro: {
    prerender: {
      routes: ["/", "/blog"],
    }
  },

  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },
});
