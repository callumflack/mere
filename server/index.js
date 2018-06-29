import keystone from "keystone";
import _ from "lodash";
import server from "./server";
// const pkg = require("./package.json");

keystone.init({
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

  // 'session': process.env.NODE_ENV !== 'production',
  // 'cookie secret': process.env.COOKIE_SECRET,
  // 'mongo': process.env.MONGO_URI || `mongodb://localhost/${pkg.name}`,
  // 'cloudinary config': process.env.CLOUDINARY_URI,
});

// set a base URL to use with <head> attributes on each page
// keystone.set('baseUrl', keystone.get('env') === 'production' ? 'https://mereskincare.com' : 'http://localhost:3000');

keystone.import("../server/models");

keystone.set("locals", {
  _,
  env: keystone.get("env"),
  utils: keystone.utils,
  editable: keystone.content.editable
});

keystone.set("routes", server);

// Force cloudinary to serve images over https
// keystone.set('cloudinary secure', true);

keystone.set("nav", {
  posts: ["posts", "post-categories"],
  enquiries: "enquiries",
  users: "users"
});

// if (process.env.NODE_ENV !== 'test') {
//   keystone.start();
// }

// if (process.env.NODE_ENV !== "production") require("dotenv").config();

keystone.start();
