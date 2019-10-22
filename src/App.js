import React from "react";
import styled from "styled-components";

import Title from "./components/Title";
import Sun from "./components/Sun";
import Planet from "./components/Planet";
import PlanetDetails from "./components/PlanetDetails";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SolarSystem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

function App() {
  return (
    <AppContainer>
      <Title>THE SOLAR SYSTEM</Title>
      <SolarSystem>
        <Sun />
        <Planet
          name="Mercury"
          image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572905/Inclusive/planets/mercury.png"
        />
        <Planet
          name="Venus"
          image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572906/Inclusive/planets/venus.png"
        />
        <Planet
          name="Earth"
          image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572906/Inclusive/planets/earth.png"
        />
        <Planet
          name="Mars"
          image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572906/Inclusive/planets/mars.png"
        />
        <Planet
          name="Jupiter"
          image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572906/Inclusive/planets/jupiter.png"
        />
        <Planet
          name="Saturn"
          image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572906/Inclusive/planets/saturn.png"
        />
        <Planet
          name="Uranus"
          image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572907/Inclusive/planets/uranus.png"
        />
        <Planet
          name="Neptune"
          image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572906/Inclusive/planets/neptune.png"
        />
      </SolarSystem>

      <PlanetDetails
        name="Mercury"
        image="https://res.cloudinary.com/mrstevenhill/image/upload/v1571572999/Inclusive/planets-real/mercury.jpg"
        distance="57,909,175"
        mass="3.302×10^23"
        diameter="4,879.28"
      />

      <Footer>&copy; 2019 - MrStevenHill</Footer>
    </AppContainer>
  );
}

export default App;
