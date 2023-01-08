import { NextApiRequest, NextApiResponse } from "next";
import { JsonDB } from "node-json-db";

export type Book = {
  id: string;
  title: string;
  author: string;
  isSelected?: boolean;
};

export type SelectedBook = Pick<Book, "id" | "title" | "isSelected">;

export type NewBookInput = Pick<Book, "title" | "author">;

export type ServerContextType = {
  req: NextApiRequest;
  res: NextApiResponse;
  db: JsonDB;
};
