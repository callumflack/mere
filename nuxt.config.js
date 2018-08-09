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

  loading: { color: "hsl(77, 19%, 47%)" },

  css: ["~/assets/styles/application.css"],

  modules: ["@nuxtjs/apollo"],

  router: {
    middleware: "currentPage"
  },

  apollo: {
    clientConfigs: {
      default: "~/apollo/client-configs/default.js"
    },
    includeNodeModules: true
  },

  build: {
    loaders: [
      {
        test: /\.postcss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader"
          }
        ]
      }
    ],
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
