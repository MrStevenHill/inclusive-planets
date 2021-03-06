import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const PlanetImage = styled.img`
  transition: transform 0.2s;
  transition-timing-function: ease-in-out;
  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  @media (max-width: 600px) {
    vertical-align: initial;
  }
`;

const PlanetLabel = styled.div``;

const DottedLine = styled.div`
  width: 0px;
  height: 100px;
  margin-top: 6px;
  border-left: 3px dotted;
  @media (max-width: 600px) {
    height: 0px;
  }
`;

const propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const Planet = ({ name, image, onClick }) => (
  <PlanetContainer>
    <PlanetImage src={image} onClick={onClick} />
    <DottedLine />
    <PlanetLabel>{name}</PlanetLabel>
  </PlanetContainer>
);

Planet.propTypes = propTypes;

export default Planet;
