import React from "react";
import Home from "../src/pages/Home/";
import About from "../src/pages/About";
import "./App.css";
import BottomNavigation from "../src/components/BottomNavigation";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
