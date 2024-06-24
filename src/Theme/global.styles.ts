import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;

        overflow-x: hidden;
        padding-right: 0 !important;
        background-color: ${props => props.theme.colors.gray1};
    }
    
    *,
    *:before,
    *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    }`;
