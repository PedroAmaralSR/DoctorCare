import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;


  }

  body::before {
    content: '';
    width: 100%;
    height: 678px;
    background-color: ${({theme}) => theme.COLORS.BRAND_LIGHT};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

  body{
    background-color: ${({theme}) => theme.COLORS.BRAND_LIGHT02};
    
    font-family: 'DM Sans', sans-serif;
    font-size:1.6rem ;
  }

  button{
    font-family: 'DM Sans', sans-serif;
  }

  a{
    text-decoration: none;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }

  li{
    list-style: none;
  }

  @media (max-width: 1118px){
    body::before {
    content: '';
    width: 100%;
    height: 600px;
    background-color: ${({theme}) => theme.COLORS.BRAND_LIGHT};
    /* background-color:blue; */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    }
  }

  @media (max-width: 768px){
    body::before {
    content: '';
    width: 100%;
    height: 1142px;
    background-color: ${({theme}) => theme.COLORS.BRAND_LIGHT};
    /* background-color:blue; */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    }
  }

`