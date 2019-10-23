import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Planet from "./Planet";
import Sun from "./Sun";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const propTypes = {
  planetData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      realImage: PropTypes.string.isRequired,
      distance: PropTypes.string.isRequired,
      mass: PropTypes.string.isRequired,
      diameter: PropTypes.string.isRequired
    })
  ).isRequired
};

const SolarSystem = ({ planetData }) => {
  const planets = planetData.map(planet => (
    <Planet name={planet.name} image={planet.image} />
  ));

  return (
    <Container>
      <Sun />
      {planets}
    </Container>
  );
};

{
  /* <PlanetDetails
    name="Mercury"
    image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572999/Inclusive/planets-real/mercury.jpg"
    distance="57,909,175"
    mass="3.302×10^23"
    diameter="4,879.28"
  /> */
}

SolarSystem.propTypes = propTypes;

export default SolarSystem;
