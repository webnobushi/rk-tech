const pkg = require('./package')
const path = require('path')

module.exports = {
  mode: 'universal',

  server: {
    host: '0.0.0.0',
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // https://bulma.io
    { src: 'bulma', lang: 'sass' },
    'ress',
    'assets/styl/global.styl',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/global-components',
    { src: '~plugins/vee-validate' },
    { src: '~plugins/no-ssr-libraries', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    analyze: false,

    /*
    ** extend webpack config here
    */
    extend(config, ctx) {
      // webfonts-loader config
      config.module.rules.push({
        test: /plugins\/font\.js$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'webfonts-loader',
            options: {
              publicPath: config.output.publicPath,
            },
          }
        ],
      })

      // Run ESLint on save
      if (false/* lint 無効化 */ && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

  },

  // webpack alias config(for WebStorm file indexing)
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    root: path.resolve(__dirname),
    alias: {
      '@': path.resolve(__dirname),
    },
  },
}
