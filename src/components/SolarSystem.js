import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Sun from "./Sun";
import Planet from "./Planet";
import PlanetDetails from "./PlanetDetails";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: unset;
    flex-wrap: unset;
  }
`;

const propTypes = {
  planetData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      realImageUrl: PropTypes.string.isRequired,
      distanceFromSun: PropTypes.string.isRequired,
      mass: PropTypes.string.isRequired,
      diameter: PropTypes.string.isRequired
    })
  ).isRequired
};

const SolarSystem = ({ planetData }) => {
  const [showPlanet, setShowPlanet] = useState("[]");

  const planets = planetData.map(planet => (
    <Planet
      key={planet.name}
      name={planet.name}
      image={planet.imageUrl}
      onClick={() => setShowPlanet(planet.name)}
    />
  ));

  const planetDetails = planetData.map(planet => (
    <PlanetDetails
      key={planet.name}
      name={planet.name}
      image={planet.realImageUrl}
      distance={planet.distanceFromSun}
      mass={planet.mass}
      diameter={planet.diameter}
      visible={planet.name === showPlanet}
      onClose={() => setShowPlanet("")}
    />
  ));

  return (
    <Container>
      <Sun />
      {planets}
      {planetDetails}
    </Container>
  );
};

SolarSystem.propTypes = propTypes;

export default SolarSystem;
