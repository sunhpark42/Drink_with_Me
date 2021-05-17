import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    max-width: 380px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    background-color: #000;
    color: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    padding: 0;
    border: 0;
    outline: none;
  }
`;

export default GlobalStyle;
