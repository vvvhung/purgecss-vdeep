// const cheerio = require('cheerio')
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: '_nuxt',
  },

  buildModules: [
    'nuxt-delay-hydration',
    'nuxt-purgecss',
    '@nuxtjs/tailwindcss',
  ],

  purgeCSS: {
    // your settings here
    whitelist: [/::v-deep .*/, /::v-deep.*/, '::v-deep .card-hoder-name'],
    safelist: {
      deep: [/card-hoder-name$/]
    }
  },

  build: {
    publicPath: process.env.BUILD_PATH,
  },

  components: true
}
