import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./global/styles.ts";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
    <App />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
