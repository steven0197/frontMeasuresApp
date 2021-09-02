import "./App.css";
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./approuter.jsx";
import GlobalStyles from "./components/layouts/globalstyles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
