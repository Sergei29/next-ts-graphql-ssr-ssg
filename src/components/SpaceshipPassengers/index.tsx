import React from "react";
import { useQuery } from "@apollo/client";

import { GET_PASSENGERS } from "@/graphql/client";
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
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={passenger.id}
          src={passenger.image}
          alt="rick&morty"
          style={{
            width: "100%",
            borderRadius: "50%",
            border: "5px solid #318bbe",
          }}
        />
      ))}
    </div>
  );
};

export default SpaceshipPassengers;
