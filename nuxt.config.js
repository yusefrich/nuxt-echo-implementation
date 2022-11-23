export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  server: {
    port: 7000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-echo-implementation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: './plugins/ws', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    ['@nuxtjs/laravel-echo', {
      broadcaster: process.env.WS_BROADCASTER,
      key: process.env.WS_KEY,
      secret: process.env.WS_SECRET,
      wsHost: process.env.WS_HOST,
      wsPort: process.env.WS_PORT,
      wssPort: process.env.WSS_PORT,
      encrypted: process.env.WS_ENCRYPTED && process.env.WS_ENCRYPTED === 'true' ? true : false,
      disableStats: process.env.WS_DISABLE_STATS && process.env.WS_DISABLE_STATS === 'true' ? true : false,
      cluster: process.env.WS_CLUSTER ? process.env.WS_CLUSTER : 'mt1',
      forceTLS: process.env.WS_FORCE_TLS && process.env.WS_FORCE_TLS === 'true' ? true : false,
      enabledTransports: ['ws', 'wss'],
      disabledTransports: ['sockjs', 'xhr_polling', 'xhr_streaming']
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
