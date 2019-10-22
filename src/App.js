import React from "react";
import styled from "styled-components";

import Title from "./components/Title";
import Sun from "./components/Sun";
import Planet from "./components/Planet";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SolarSystem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

function App() {
  return (
    <AppContainer>
      <Title>THE SOLAR SYSTEM</Title>
      <SolarSystem>
        <Sun />
        <Planet name="Mercury" />
        <Planet name="Venus" />
        <Planet name="Earth" />
        <Planet name="Mars" />
        <Planet name="Jupiter" />
        <Planet name="Saturn" />
        <Planet name="Uranus" />
        <Planet name="Neptune" />
      </SolarSystem>
      <Footer>&copy; 2019 - MrStevenHill</Footer>
    </AppContainer>
  );
}

export default App;
