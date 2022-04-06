import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Poppins', sans-serif;
        transition: .2s all;
    }
    body{
        background: #6066D0;
    }
    h1{
        color: white;
        text-align: center;
    }
`