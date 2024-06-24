import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/theme.ts";
import * as Styled from "./Theme/global.styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
