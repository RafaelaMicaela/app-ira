import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body > div {
        background-color: ${({theme}) => theme.colors["primary"]};
    }
`;

export default GlobalStyle;