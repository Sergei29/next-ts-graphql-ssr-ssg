export type Character = {
  id: string;
  name: string;
  image: string;
  species: string;
  isSpaceshipPassenger?: boolean;
};

export type Passenger = Pick<
  Character,
  "id" | "image" | "isSpaceshipPassenger"
>;

export type PageList<T> = {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  results: T[];
};
