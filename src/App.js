import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  margin-left: auto;
  padding-bottom: 10px;
  padding-right: 100px;
  border-bottom: 4px dotted;
  margin-bottom: 25px;
`;

const Footer = styled.div`
  margin-right: 10px;
  margin-left: auto;
  margin-top: 20px;
  font-size: 12px;
`;

const SolarSystem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Sun = styled.div``;

const Planet = styled.div``;

function App() {
  return (
    <AppContainer>
      <PageTitle>The Solar System</PageTitle>
      <SolarSystem>
        <Sun>Sun</Sun>
        <Planet>Mercury</Planet>
        <Planet>Venus</Planet>
        <Planet>Earth</Planet>
        <Planet>Mars</Planet>
        <Planet>Jupiter</Planet>
        <Planet>Saturn</Planet>
        <Planet>Uranus</Planet>
        <Planet>Neptune</Planet>
      </SolarSystem>
      <Footer>&copy; 2019 - MrStevenHill</Footer>
    </AppContainer>
  );
}

export default App;
