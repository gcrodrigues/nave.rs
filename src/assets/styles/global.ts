import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  #root{
    display: flex;
    align-items:center;
    justify-content:center;
    min-height: 600px;
  }

  body, input, button, textarea{
    font: 400 1.6rem 'Montserrat';
  }

  .loading{
    position:absolute; 
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:center;
  }

  @media (min-width: 700px){
    :root {
      font-size: 62.5%;
    }
  }
`;
