import React from "react";
import Main from "./components/Main/Main";
import StatProvider from "./context/StatContext";

import { ThemeProvider } from "@mui/material/styles";
import PrestigeProvider from "./context/PrestigeContext";
import store, { StoreContext } from "./store";

function App() {
  return (
    <StoreContext.Provider value={store}>
      <PrestigeProvider>
        <div className="App">
          <Main />
        </div>
      </PrestigeProvider>
    </StoreContext.Provider>
  );
}

export default App;
