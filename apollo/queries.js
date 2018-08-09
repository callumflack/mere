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
