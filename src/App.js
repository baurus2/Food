import { ThemeProvider } from "@mui/material";
import theme from "./constants/Theme";
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";
import { GlobalStyle } from "./globalStyles";
import React from 'react'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
          <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;