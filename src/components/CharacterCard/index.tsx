import React from "react";
import Image from "next/image";
import { useReactiveVar } from "@apollo/client";

import { spaceShipPassengersVar } from "@/graphql/client";
import { Character } from "@/types";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props): JSX.Element => {
  const passengerIds = useReactiveVar(spaceShipPassengersVar);

  const handleAddTo = () => {
    if (character.isSpaceshipPassenger) {
      spaceShipPassengersVar(
        passengerIds.filter((current) => current !== character.id)
      );
    } else {
      spaceShipPassengersVar([...passengerIds, character.id]);
    }
  };

  return (
    <div className="flex flex-col p-2 border-2 border-solid border-indigo-500 rounded-md">
      <Image
        src={character.image}
        width={300}
        height={300}
        alt={character.name}
        className="w-full"
      />
      <div>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </div>
      <button
        className="mt-auto hover:border-2 hover:border-solid hover:border-indigo-500 hover:bg-yellow-200 rounded-md transition-all duration-150 ease-in-out"
        onClick={handleAddTo}
      >
        {character.isSpaceshipPassenger ? "Remove from" : "Add to"}
      </button>
    </div>
  );
};

export default CharacterCard;
