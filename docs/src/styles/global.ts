import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --win98-white: #ffffff;
    --win98-gray: #c0c0c0;
    --win98-black: #000000;
    --win98-navy: #000080;
    --win98-silver: #c0c0c0;
    --win98-desktop: #008080;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'MS Sans Serif', 'Segoe UI', sans-serif;
    line-height: 1.5;
    color: var(--win98-black);
    background-color: var(--win98-desktop);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    color: var(--win98-navy);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    font-family: 'Consolas', monospace;
    background-color: var(--win98-white);
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
  }

  pre {
    font-family: 'Consolas', monospace;
    background-color: var(--win98-white);
    padding: 1rem;
    border: 2px solid var(--win98-gray);
    border-radius: 4px;
    overflow-x: auto;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
