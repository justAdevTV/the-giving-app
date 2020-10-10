import { createGlobalStyle } from "styled-components";

// Normailizes CSS for DOM
const GlobalStyle = createGlobalStyle`
/* Starts clean so browser doesn't change anything */
  * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%; // 1 rem = 10px; 10px/16px = 62.5%
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.6;
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
