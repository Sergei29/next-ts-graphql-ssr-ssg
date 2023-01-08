import { makeVar } from "@apollo/client";

export const selectedBooksVar = makeVar<string[]>([]);
