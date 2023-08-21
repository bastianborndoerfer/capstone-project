import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    font-family: system-ui;
    width: 667px;
    box-shadow: 1px 1px 10px grey;
    text-align: center;
  }
`;

