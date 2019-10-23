import React from "react";
import styled from "styled-components";

import Title from "./components/Title";
import SolarSystem from "./components/SolarSystem";
import Footer from "./components/Footer";
import planetData from "./data";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Title>THE SOLAR SYSTEM</Title>
      <SolarSystem planetData={planetData} />
      <Footer>&copy; 2019 - MrStevenHill</Footer>
    </AppContainer>
  );
}

export default App;
