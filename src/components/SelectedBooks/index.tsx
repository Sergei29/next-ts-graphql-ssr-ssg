import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";

import { GET_SELECTED_BOOKS, selectedBooksVar } from "@/graphql/client";
import { SelectedBook } from "@/types";

type Props = {};

export const BooksContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-5 rounded-md mb-4 min-h-[200px]">
      <h2 className="mb-4">Selected books 🚀</h2>
      {children}
    </div>
  );
};

const SelectedBooks = ({}: Props): JSX.Element => {
  const { data, loading, error } = useQuery<{
    books: SelectedBook[];
  }>(GET_SELECTED_BOOKS);

  const handleRemoveSelected = (passengerId: string) => {
    const currentPassengers = selectedBooksVar();
    selectedBooksVar(
      currentPassengers.filter((currentId) => currentId !== passengerId)
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const { books } = data!;

  const selectedBooks = books.filter((book) => book.isSelected);

  if (!selectedBooks.length) {
    return (
      <p className="text-center py-6">
        No books. Add someone to your selection.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 100px)",
        gap: 20,
      }}
    >
      {selectedBooks.map((book) => (
        <div key={book.id} className="relative">
          {/* <Image
            src={book.image}
            width={300}
            height={300}
            alt="rick&morty"
            className="border-4 border-solid border-green-400 rounded-full w-full"
          /> */}
          <h4>{book.title}</h4>
          <button
            className="w-[35px] p-1 h-[35px] border-[1px] border-solid border-red-600 bg-yellow-300 text-red-600  rounded-full flex justify-center items-center absolute bottom-[-5px] left-[-3px]"
            onClick={() => handleRemoveSelected(book.id)}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedBooks;
