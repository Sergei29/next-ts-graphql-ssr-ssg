import { InMemoryCacheConfig } from "@apollo/client";

import { selectedBooksVar } from "./reactiveVars";

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Book: {
      fields: {
        isSelected: {
          read: (_, { variables, readField }) => {
            const bookId = readField("id") as string;

            return selectedBooksVar().includes(bookId);
          },
        },
      },
    },
  },
};
