import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    width: 360px;
    box-shadow: 1px 1px 10px grey;
    padding-bottom: 1rem;
    text-align: center;
  }
`;
