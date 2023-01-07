import React from "react";
import { useQuery } from "@apollo/client";

import CharacterCard from "@/components/CharacterCard";
import { GET_CHARACTERS } from "@/graphql/client";
import { Character, PageList } from "@/types";

type Props = {};

const CharacterGrid = ({}: Props): JSX.Element => {
  const { data, loading, error } = useQuery<{
    characters: PageList<Character>;
  }>(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
    >
      {data &&
        data.characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </div>
  );
};

export default CharacterGrid;
