import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #1f1f2e;
    color: #ffffff;
  }

  * {
    box-sizing: border-box;
  }

  button {
    padding: 0;
    border: 0;
    outline: none;
  }
`;

export default GlobalStyle;
