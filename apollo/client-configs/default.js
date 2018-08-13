import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Shopify endpoint
// const GRAPHCMS_API = "https://api-useast.graphcms.com/v1/cjiacyow100ob01eqwnghonw2/master";
const SHOPIFY_API = "https://cfdd.myshopify.com/api/graphql";
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = "811b7025f726d038cb26fdf4edb504b9";

export default () => ({
  link: new HttpLink({
    uri: SHOPIFY_API,
    headers: {
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN
    }
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});
