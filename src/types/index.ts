export type Book = {
  id: string;
  title: string;
  author: string;
  isSelected?: boolean;
};

export type SelectedBook = Pick<Book, "id" | "title" | "isSelected">;
