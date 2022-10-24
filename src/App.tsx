import React from "react";
import Main from "./components/Main/Main";
import StatProvider from "./context/GameContext";

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
