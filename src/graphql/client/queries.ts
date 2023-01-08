import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      isSelected @client
    }
  }
`;

export const GET_SELECTED_BOOKS = gql`
  query GetPassengers {
    books {
      id
      title
      isSelected @client
    }
  }
`;
