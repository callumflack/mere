import gql from "graphql-tag";

export const PRODUCT = gql`
  query {
    node(id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE0MTgxNDc2MjcwNzc=") {
      id
      ... on Product {
        title
        handle
        productType
      }
    }
  }
`;