import { JsonDB } from "node-json-db";

import { Book, NewBookInput } from "@/types";
import { v4 as uuid } from "uuid";

const getDataProvider = (db: JsonDB) => {
  return {
    books: {
      getBooks: async (): Promise<Book[]> => await db.getData("/books"),
      getBookById: async (id: string) => {
        const books: Book[] = await db.getData("/books");

        return books.find((current) => current.id === id);
      },
      addNewBook: async (input: NewBookInput): Promise<Book> => {
        const newBook = { id: uuid(), ...input };
        const books: Book[] = await db.getData("/books");
        const booksUpdated = [...books, newBook];
        await db.push("/books", booksUpdated);

        return newBook;
      },
      updateBook: async (id: string, bookFields: Partial<NewBookInput>) => {
        const books: Book[] = await db.getData("/books");
        const bookFound = books.find((current) => current.id === id);
        if (!bookFound) {
          throw new Error("not found");
        }

        const updatedBook: Book = { ...bookFound, ...bookFields };

        const booksUpdated = books.map((current) =>
          current.id === id ? updatedBook : current
        );
        await db.push("/books", booksUpdated);

        return updatedBook;
      },
      deleteBookById: async (id: string) => {
        const books: Book[] = await db.getData("/books");
        const bookToDelete = books.find((current) => current.id === id);
        if (!bookToDelete) {
          throw new Error("not found");
        }

        const booksUpdated = books.filter((current) => current.id !== id);
        await db.push("/books", booksUpdated);

        return bookToDelete;
      },
    },
  };
};

export default getDataProvider;
