import React from "react";
import styled from "styled-components";

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
  }
`;

const PlanetLabel = styled.div``;

const DottedLine = styled.div`
  width: 0px;
  height: 100px;
  margin-top: 6px;
  border-left: 3px dotted;
`;

const Planet = ({ name, image }) => (
  <PlanetContainer>
    <PlanetImage src={image} />
    <DottedLine />
    <PlanetLabel>{name}</PlanetLabel>
  </PlanetContainer>
);

export default Planet;
