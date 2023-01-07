import React from "react";

import { Character } from "@/types";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props): JSX.Element => {
  const handleAddTo = () => {
    console.log("ad to shapceship");
  };

  return (
    <div className="flex flex-col p-2 border-2 border-solid border-indigo-500 rounded-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={character.image} alt={character.name} className="w-full" />
      <div>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </div>
      <button
        className="mt-auto hover:border-2 hover:border-solid hover:border-indigo-500 hover:bg-yellow-200 rounded-md transition-all duration-150 ease-in-out"
        onClick={handleAddTo}
      >
        Add to
      </button>
    </div>
  );
};

export default CharacterCard;
