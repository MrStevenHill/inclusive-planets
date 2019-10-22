import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Panel = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-bottom: 5px dotted;
`;

const Detail = styled.div`
  background: linear-gradient(#000, transparent);
  border: none;
  padding: 20px;
  line-height: 1.5;
`;

const propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired
};

const PlanetDetails = ({ name, image, distance, mass, diameter }) => (
  <Panel>
    <img src={image} alt={name} />
    <Detail>
      <h2>Planet {name}</h2>
      <p>
        <div>Distance from the Sun: {distance}</div>
        <div>Mass: {mass} Kg</div>
        <div>Diameter:{diameter} Km</div>
      </p>
      <a href="_">&lt; Back to Planets</a>
    </Detail>
  </Panel>
);

PlanetDetails.propTypes = propTypes;

export default PlanetDetails;
