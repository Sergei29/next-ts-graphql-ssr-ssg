import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        species
        # isSpaceshipPassenger @client
      }
    }
  }
`;

export const GET_PASSENGERS = gql`
  query GetPassengers {
    characters {
      results {
        id
        image
        # isSpaceshipPassenger @client
      }
    }
  }
`;
