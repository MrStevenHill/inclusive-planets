import React from "react";
import styled from "styled-components";

import Planet from "./Planet";
import Footer from "./Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  margin-left: auto;
  margin-top: 50px;
  padding-bottom: 10px;
  padding-right: 100px;
  border-bottom: 4px dotted;
  margin-bottom: 25px;
`;

const SolarSystem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Sun = styled.div``;

function App() {
  return (
    <AppContainer>
      <PageTitle>THE SOLAR SYSTEM</PageTitle>
      <SolarSystem>
        <Sun>Sun</Sun>
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
