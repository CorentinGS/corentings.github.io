import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import compress from 'vite-plugin-compress'


export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  ssr: false,
  target: 'static',

  modules: ['@nuxtjs/tailwindcss'],


  buildModules: [
    '@intlify/nuxt3',
    'unplugin-icons/nuxt'
  ],

  tailwindcss: {
    // @ts-ignore
    jit: true,
  },

  intlify: {
    localeDir: 'locales',
    vueI18n: {
      availableLocales: ['en', 'fr'],
      locale: 'en',
      fallbackLocale: 'en',
    },
  },
  components: true,

  vite: {
    plugins: [
      compress(
          {
            exclude: ["srr-manifest.json"],
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
