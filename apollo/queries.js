import gql from "graphql-tag";

export const POSTS_QUERY = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      dateAndTime
      coverImage {
        handle
      }
    }
  }
`;

export const POSTS_PER_PAGE = 2;

export const PRODUCTS_QUERY = gql`
  query {
    shop {
      name
      description
      primaryDomain {
        url
        host
      }
      productByHandle(handle: "illuminating-revival-oil") {
        id
      }
      products(first:20) {
        edges {
          node {
            id
            title
            options {
              id
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
