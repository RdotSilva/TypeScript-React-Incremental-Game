import React from "react";
import Main from "./components/Main/Main";
import StatProvider from "./context/StatContext";

import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <StatProvider>
      <div className="App">
        <Main />
      </div>
    </StatProvider>
  );
}

export default App;
