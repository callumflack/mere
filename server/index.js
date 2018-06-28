import keystone from "keystone";
import _ from "lodash";
import server from "./server";

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
});

keystone.import("../server/models");

keystone.set("locals", {
  _,
  env: keystone.get("env"),
  utils: keystone.utils,
  editable: keystone.content.editable
});

keystone.set("routes", server);

keystone.set("nav", {
  posts: ["posts", "post-categories"],
  enquiries: "enquiries",
  users: "users"
});

keystone.start();
