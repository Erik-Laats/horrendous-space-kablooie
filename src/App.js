import React from "react";

import CardCreator from "./Components/CardCreator";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <CardCreator />
        <h1>Test</h1>
      </div>
    </div>
  );
}

export default App;
