import React from "react";
import Main from "./components/Main/Main";

import store, { StoreContext } from "./store";

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Main />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
