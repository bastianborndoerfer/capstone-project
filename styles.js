import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

:root {
---primary-color: #039a9a; //petrol
---secondary-color: #90d033; //hellgrün
---grey1-color: #f3f2ef; //hellgrau
---grey2-color: #e4e3e2; //mittelgrau
---grey3-color: #656c6a; //dunkelgrau
---dark: #121212;

}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    font-family: system-ui;
    width: 420px;
    box-shadow: 1px 1px 10px grey;
    text-align: center;
    background-color: #f2f2f2;
    
  }

  a {
    text-decoration: none;
    color: black;
    &:hover {
    transform: scale(1.05);
  }
  }
`;
