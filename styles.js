import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
--background: #26272b; // dunkel
--text: #f4f4f4; // hell
--grey1-color: #f3f2ef; //hellgrau
--grey2-color: #e4e3e2; //mittelgrau
--grey3-color: #656c6a; //dunkelgrau
--dark: #121212;

}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: #26272b;
    color: #f4f4f4;  
    
    
  }
  
  a {
    text-decoration: none;
    color: #f4f4ff;
    &:hover {
      transform: scale(1.03);
      transition: trasform 0.3s ease-in-out;
      cursor: pointer;
  
  }
  }
  h1 {
    text-align: center;
    margin: 1rem;
  }

  h2 {
  padding: 20px;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  Image {
    background-color: transparent;
    
  }
ul {
  list-style: none;
}

`;
