require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("keystone");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keystone__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keystone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_keystone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server__ = __webpack_require__(3);




__WEBPACK_IMPORTED_MODULE_0_keystone___default.a.init({
  name: "Keystone Boilerplate",
  brand: "Keystone Boilerplate",
  static: "public",
  logger: ":method :url :status :response-time ms - :res[content-length]",
  "auto update": true,
  updates: "../server/updates",
  session: true,
  auth: true,
  "user model": "User",
  compress: true,
  headless: false // true to disable admin
});

__WEBPACK_IMPORTED_MODULE_0_keystone___default.a.import("../server/models");

__WEBPACK_IMPORTED_MODULE_0_keystone___default.a.set("locals", {
  _: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a,
  env: __WEBPACK_IMPORTED_MODULE_0_keystone___default.a.get("env"),
  utils: __WEBPACK_IMPORTED_MODULE_0_keystone___default.a.utils,
  editable: __WEBPACK_IMPORTED_MODULE_0_keystone___default.a.content.editable
});

__WEBPACK_IMPORTED_MODULE_0_keystone___default.a.set("routes", __WEBPACK_IMPORTED_MODULE_2__server__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_keystone___default.a.set("nav", {
  posts: ["posts", "post-categories"],
  enquiries: "enquiries",
  users: "users"
});

__WEBPACK_IMPORTED_MODULE_0_keystone___default.a.start();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keystone__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keystone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_keystone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_restful_keystone__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_restful_keystone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_restful_keystone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt__ = __webpack_require__(5);




const restfulKeystone = __WEBPACK_IMPORTED_MODULE_1_restful_keystone___default()(__WEBPACK_IMPORTED_MODULE_0_keystone___default.a, {
  root: '/api/v1'
});

/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  /**
   * Rest API
   */
  restfulKeystone.expose({
    Post: {
      methods: ['list', 'retrieve'],
      filter: {
        state: 'published'
      },
      populate: 'author'
    },
    PostCategory: {
      methods: ['list', 'retrieve']
    }
  }).start();

  // Give nuxt middleware to express
  app.use(__WEBPACK_IMPORTED_MODULE_2__nuxt__["a" /* default */].render);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("restful-keystone");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nuxt__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nuxt__);


// Import and Set Nuxt.js options
let config = __webpack_require__(7);
config.dev = !("development" === 'production');

// Init Nuxt.js
const nuxt = new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Builder"](nuxt);
  builder.build();
}

/* harmony default export */ __webpack_exports__["a"] = (nuxt);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const pkg = __webpack_require__(8);

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: pkg.description }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
  ** Customize the progress-bar color
  ** or loading: "~/components/PageLoading.vue",
  */
  loading: { color: "hsl(77, 19%, 47%)" },

  /*
  ** Global CSS
  */
  css: ["~/assets/styles/application.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: "~/plugins/v-lazy-image",
    ssr: false
  }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // "@nuxtjs/axios"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    middleware: "currentPage"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Add axios globally
    */
    vendor: ["axios"],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Add postcss loader for CSS files
      // https://github.com/nuxt/nuxt.js/issues/846#issuecomment-309196303
      let cssLoader = config.module.rules.find(loader => loader.test.toString() === "/\\.css$/");
      cssLoader.use.push("postcss-loader");
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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"name":"mere","version":"1.0.0","description":"mere ecommerce shop","author":"Callum Flack","private":true,"scripts":{"dev":"cross-env COOKIE_SECRET=XvjTYomanfw3koRdMFwnnqDQY6kLKv6erUWPTJkAcxeftYPq3R MONGOLAB_URI=mongodb://callum:yellow77@ds121251.mlab.com:21251/mere backpack dev","build":"nuxt build && backpack build","start":"cross-env NODE_ENV=production noe build/main.js","generate":"nuxt generate && cp now.json dist/","lint":"eslint --ext .js,.vue --ignore-path .gitignore .","precommit":"npm run lint"},"dependencies":{"axios":"^0.18.0","cross-env":"^5.1.4","dotenv":"^5.0.1","keystone":"^4.0.0-rc.0","lodash":"^4.17.5","@nuxtjs/axios":"^5.0.0","normalize.css":"^8.0.0","nuxt":"^1.4.0","postcss-custom-selectors":"^4.0.1","postcss-easy-import":"^3.0.0","postcss-import-resolver":"^1.1.0","postcss-load-config":"^1.2.0","postcss-mixins":"^6.2.0","postcss-nesting":"^6.0.0","postcss-preset-env":"^5.1.0","restful-keystone":"^0.3.0","source-map-support":"^0.5.4","suitcss-base":"^4.0.0","v-lazy-image":"^1.2.1"},"devDependencies":{"babel-eslint":"^8.2.1","backpack-core":"^0.7.0","eslint":"^4.15.0","eslint-loader":"^2.0.0","eslint-plugin-vue":"^4.0.0","pug":"^2.0.3","pug-loader":"^2.4.0","pug-plain-loader":"^1.0.0"}}

/***/ })
/******/ ]);
//# sourceMappingURL=main.map