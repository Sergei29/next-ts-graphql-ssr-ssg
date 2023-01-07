import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";

import { GET_PASSENGERS, spaceShipPassengersVar } from "@/graphql/client";
import { Passenger, PageList } from "@/types";

type Props = {};

export const ShipContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-5 rounded-md mb-4 min-h-[200px]">
      <h2 className="mb-4">Spaceship passengers 🚀</h2>
      {children}
    </div>
  );
};

const SpaceshipPassengers = ({}: Props): JSX.Element => {
  const { data, loading, error } = useQuery<{
    characters: PageList<Passenger>;
  }>(GET_PASSENGERS);

  const handleRemovepassenger = (passengerId: string) => {
    const currentPassengers = spaceShipPassengersVar();
    spaceShipPassengersVar(
      currentPassengers.filter((currentId) => currentId !== passengerId)
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const {
    characters: { results },
  } = data!;

  const passengers = results.filter(
    (character) => character.isSpaceshipPassenger
  );

  if (!passengers.length) {
    return (
      <p className="text-center py-6">
        No passengers. Add someone to your spaceship.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 100px)",
        gap: 20,
      }}
    >
      {passengers.map((passenger) => (
        <div key={passenger.id} className="relative">
          <Image
            src={passenger.image}
            width={300}
            height={300}
            alt="rick&morty"
            className="border-4 border-solid border-green-400 rounded-full w-full"
          />
          <button
            className="w-[35px] p-1 h-[35px] border-[1px] border-solid border-red-600 bg-yellow-300 text-red-600  rounded-full flex justify-center items-center absolute bottom-[-5px] left-[-3px]"
            onClick={() => handleRemovepassenger(passenger.id)}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default SpaceshipPassengers;
