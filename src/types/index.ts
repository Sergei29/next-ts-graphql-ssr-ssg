import { NextApiRequest, NextApiResponse } from "next";
import { JsonDB } from "node-json-db";

import dataProvider from "@/db/dataProvider";

type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  image?: Image;
  isSelected?: boolean;
};

export type SelectedBook = Pick<Book, "id" | "title" | "isSelected">;

export type NewBookInput = Pick<Book, "title" | "author" | "image">;

export type ServerContextType = {
  req: NextApiRequest;
  res: NextApiResponse;
  db: ReturnType<typeof dataProvider>;
};
