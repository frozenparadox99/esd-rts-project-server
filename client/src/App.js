import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

import Navbar from "./Components/Layout/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ReactSpeedometer />
    </div>
  );
}

export default App;
