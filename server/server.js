import keystone from "keystone";
import RestfulKeystone from "restful-keystone";
import nuxt from "./nuxt";

const restfulKeystone = RestfulKeystone(keystone, {
  root: "/api/v1"
});

export default function(app) {
  /**
   * Rest API
   */
  restfulKeystone
    .expose({
      Post: {
        methods: ["list", "retrieve"],
        populate: "author",
        show: "_id slug category title image content.brief content.extended",
        filter: {
          state: "published"
        }
      },
      PostCategory: {
        methods: ["list", "retrieve"]
      }
    })
    .start();

  // Give nuxt middleware to express
  app.use(nuxt.render);
}
