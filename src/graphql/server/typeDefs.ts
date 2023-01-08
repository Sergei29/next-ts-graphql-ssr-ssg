import { gql } from "@apollo/client";

export const typeDefs = gql`
  input ImageInput {
    url: String
    width: Int
    height: Int
  }
  type Image {
    id: ID!
    url: String
    width: Int
    height: Int
  }
  type Book {
    id: ID!
    title: String
    author: String
    image: Image
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
  }
  type Mutation {
    addBook(title: String, author: String, image: ImageInput): Book
    updateBook(title: String, author: String, image: ImageInput): Book
    deleteBook(id: ID!): Book
  }
`;
