import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Open Sans', sans-serif !important;

  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background-color: #F5F7F9;
  }

  body {
    -webkit-font-smoothing: antialiased;

    background-color: #F5F7F9;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif !important;

    background-color: #F5F7F9;
  }

  a {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif !important;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .mdc-text-field__input {
  box-sizing: initial; // or content-box
  }

  .MuiDialog-paper {
    overflow: hidden !important;
  }
    
`;
