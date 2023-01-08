import React from "react";
import { useQuery } from "@apollo/client";

import BookCard from "@/components/BookCard";
import { GET_BOOKS } from "@/graphql/client";
import { Book } from "@/types";

type Props = {};

const BooksGrid = ({}: Props): JSX.Element => {
  const { data, loading, error } = useQuery<{
    books: Book[];
  }>(GET_BOOKS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
    >
      {data && data.books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default BooksGrid;
