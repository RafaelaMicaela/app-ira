import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({theme}) => theme.colors["primary"]};
    }
`;

export default GlobalStyle;