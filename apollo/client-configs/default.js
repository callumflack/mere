import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Replace this with your project's endpoint
const GRAPHCMS_API = "https://api-useast.graphcms.com/v1/cjiacyow100ob01eqwnghonw2/master";

export default () => ({
  link: new HttpLink({
    uri: GRAPHCMS_API
    /* headers: {
      headers: {
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN
      }
    } */
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});
