import React from "react";
import Main from "./components/Main/Main";
import StatProvider from "./context/StatContext";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatProvider>
        <div className="App">
          <Main />
        </div>
      </StatProvider>
    </ThemeProvider>
  );
}

export default App;
