import React from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
