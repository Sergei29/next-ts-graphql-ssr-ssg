export type Character = {
  id: string;
} & Record<string, any>;

export type Passenger = {
  id: string;
} & Record<string, any>;

export type PageList<T> = {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  results: T[];
};
