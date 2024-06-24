import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/theme.ts";
import * as Styled from "./Theme/global.styles";
import { AppRouter } from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
