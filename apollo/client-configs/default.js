import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Shopify access
const SHOPIFY_API = "https://mere2.myshopify.com/api/graphql";
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = "85518a23492805f72d32ad891e5357fd";

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
