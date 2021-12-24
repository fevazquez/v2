import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    background: ${({ theme }) => theme.mainBlue};
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
`

