import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import compress from 'vite-plugin-compress'


export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  ssr: false,
  target: 'static',

  modules: ['@nuxtjs/tailwindcss',     '@nuxt/image-edge',],


  buildModules: [
    'unplugin-icons/nuxt'
  ],

  tailwindcss: {
    // @ts-ignore
    jit: true,
  },

  nitro: {
    minify: true,
    serveStatic: true,
  },


  components: true,

  image: {
    domains: ["github.com"],
  },

  vite: {
    plugins: [
      compress(
          {
            exclude: ["manifest.json"],
          }
      ),
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  build: {
    transpile: ['@heroicons/vue', 'headlessui/vue'],
  },
})
