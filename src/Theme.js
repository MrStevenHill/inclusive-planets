import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const themeSettings = {
  font: "Comfortaa, cursive",
  color: {
    primary: "#F0C869",
    secondary: "#09D3AC"
  }
};

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');
    font-family: ${themeSettings.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${themeSettings.color.primary};
    background: linear-gradient(-45deg, #00222C, #475B64);
    padding: 0;
    margin: 0;
    height: 100vh;
  }
  a {
    text-decoration: none;
    color: ${themeSettings.color.secondary};
  }
  h1 {
    font-weight: 500;
    line-height: 1.2;
    font-size: 2.5em;
  }
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={themeSettings}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
