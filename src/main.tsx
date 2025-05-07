import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createGlobalStyle } from 'styled-components';

// Global styles to reset and set base styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'MS Sans Serif', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  /* MS Sans Serif font */
  @font-face {
    font-family: 'MS Sans Serif';
    src: url('https://unpkg.com/98.css@0.1.16/dist/ms_sans_serif.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'MS Sans Serif';
    src: url('https://unpkg.com/98.css@0.1.16/dist/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
