import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer";
import HomePage from "./pages/homepage/HomePage";

import Navbar from "./Components/Layout/Navbar";

// import "./App.scss";
import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/speed" component={ReactSpeedometer} />
      </Switch>
    </div>
  );
}

export default App;
