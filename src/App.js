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
      </div>
    </div>
  );
}

export default App;
