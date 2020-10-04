export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/freebelarusicons/',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'FreeBelarusIcons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Grab Liberty icon pack for free. Customize your desktop and support Belarus people struggling for FREEDOM.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '@/assets/img/favicon.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '@/assets/img/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '@/assets/img/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '@/assets/img/favicon.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/reset.css', '@/assets/scss/_main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    '@nuxtjs/axios',
    'nuxt-clipboard2',
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: '67890313',
        webvisor: true,
        clickmap: true,
        debug: false,
      },
    ],
  ],
  styleResources: {
    scss: ['@/assets/scss/_variables.scss'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
