import { createGlobalStyle } from "styled-components";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

  body, header {
    margin: 0 auto;
    font-family: "inter";
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: #fff;
    @media only screen and (min-width: 415px) {
      width: 414px;
    
  }
  }
  a {
    text-decoration: none;
    color: black;
    transition: trasform 0.3s ease;
    &:hover {
    transform: scale(1.03);
  
  }
  }

  Image {
    background-color: transparent;
  }

  ul {
    list-style: none;
    padding-left: 20px;
  }
  li {
    margin-bottom: 5px;
  }

  
`;
