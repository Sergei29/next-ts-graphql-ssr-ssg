import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;
