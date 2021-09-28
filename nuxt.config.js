export default {
   server: {
    port: 3001, // par défaut: 3000
    host: '0.0.0.0', // par défaut: localhost,
    // host: 'localhost',
    // host: '127.0.0.1',
    timing: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BayWa |  For agriculture |  Agricultural online shop & service |  BayWa AG',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { /*rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' */}
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    /*'~/assets/css/mini_framework.css',
    '~/assets/css/icons.css',*/
  ],
  script:[
    //{src:'../assets/test.js', type: 'text/javascript'}
  ],/**/
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //'@/plugins/bootstrap-vue'
    '@/plugins/lower_case.js'
    /*
    '~/plugins/utils',
    '~/plugins/http',
    '~/plugins/store',
    '~/plugins/filters.js',
    { src: '~/plugins/globale.js', ssr: false },
    { src: '~/plugins/events.js', ssr: false },
    { src: '~/plugins/globalComponents.js', ssr: true },
  */],

  router: {
    /*middleware: ['Page_View']*/
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
