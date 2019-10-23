import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Title from "./components/Title";
import SolarSystem from "./components/SolarSystem";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://inclusiveplanetswebservice.azurewebsites.net/api/planets"
      );
      setPlanetData(result.data);
    };
    fetchData();
  }, []);

  return (
    <AppContainer>
      <Title>THE SOLAR SYSTEM</Title>
      <SolarSystem planetData={planetData} />
      <Footer>&copy; 2019 - MrStevenHill</Footer>
    </AppContainer>
  );
}

export default App;
