import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    input{
        outline: none;
    }
    ul{
        list-style: none;
    }
`;

export default GlobalStyles;
