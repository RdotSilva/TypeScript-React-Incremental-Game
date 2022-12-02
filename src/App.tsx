import React from "react";
import Main from "./components/Main/Main";
import StatProvider from "./context/StatContext";

import { ThemeProvider } from "@mui/material/styles";
import PrestigeProvider from "./context/PrestigeContext";

function App() {
  return (
    <StatProvider>
      <PrestigeProvider>
        <div className="App">
          <Main />
        </div>
      </PrestigeProvider>
    </StatProvider>
  );
}

export default App;
