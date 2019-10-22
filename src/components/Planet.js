import React from "react";
import styled from "styled-components";

const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Planet = ({ name }) => (
  <PlanetContainer>
    <PlanetImage src="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572905/Inclusive/planets/mercury.png" />
    <DottedLine />
    <PlanetLabel>{name}</PlanetLabel>
  </PlanetContainer>
);

export default Planet;
