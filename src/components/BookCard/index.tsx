import React from "react";
import Image from "next/image";
import { useReactiveVar } from "@apollo/client";

import { selectedBooksVar } from "@/graphql/client";
import { Book } from "@/types";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props): JSX.Element => {
  const bookIds = useReactiveVar(selectedBooksVar);

  const handleAddTo = () => {
    if (book.isSelected) {
      selectedBooksVar(bookIds.filter((current) => current !== book.id));
    } else {
      selectedBooksVar([...bookIds, book.id]);
    }
  };

  return (
    <div className="flex flex-col p-2 border-2 border-solid border-indigo-500 rounded-md">
      {/* <Image
        src={book.image}
        width={300}
        height={300}
        alt={book.name}
        className="w-full"
      /> */}
      <div>
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
      </div>
      <button
        className="mt-auto hover:border-2 hover:border-solid hover:border-indigo-500 hover:bg-yellow-200 rounded-md transition-all duration-150 ease-in-out"
        onClick={handleAddTo}
      >
        {book.isSelected ? "Remove from" : "Add to"}
      </button>
    </div>
  );
};

export default BookCard;
