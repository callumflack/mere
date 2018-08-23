const pkg = require("./package");

export default {
  mode: "universal",

  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /* loading: { color: "hsl(77, 19%, 47%)" }, */
  loading: false,

  css: ["~/assets/styles/application.css"],

  router: {
    middleware: "currentPage"
  },

  modules: ["@nuxtjs/apollo", "@nuxtjs/axios"],

  /* ['@nuxtjs/axios', {
    baseURL: 'http://localhost:8000'
  }] */

  apollo: {
    /* https://github.com/nuxt-community/apollo-module */
    /* include graphql-tag for node_modules folder */
    includeNodeModules: true,
    clientConfigs: {
      default: "~/apollo/client-configs/default.js"
    }
  },

  axios: {
    // baseURL: "https://baseurl.com",
    // browserBaseURL: "/"
    // proxyHeaders: false
  },

  build: {
    /* 
      import variables across all components & pages in one go:
      https://nuxtjs.org/api/configuration-build#watch 
     */
    styleResources: {
      css: "./assets/styles/variables.css"
    },
    /* You can extend webpack config here */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
