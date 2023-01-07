import { InMemoryCacheConfig } from "@apollo/client";

import { spaceShipPassengersVar } from "./reactiveVars";

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Character: {
      fields: {
        isSpaceshipPassenger: {
          read: (_, { variables, readField }) => {
            const caracterId = readField("id") as string;

            return spaceShipPassengersVar().includes(caracterId);
          },
        },
      },
    },
  },
};
