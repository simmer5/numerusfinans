import React, { useEffect, useState } from "react";
import Home from "../src/pages/Home/";
import About from "../src/pages/About";
import DesktopTjenester from "./pages/DesktopTlenester";
import "./App.css";
import DesktopHome from "./pages/DesktopHome";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {width < breakpoint ? <Home /> : <DesktopHome />}
          </Route>

          <Route path="/about">
            {width < breakpoint ? <About /> : <DesktopTjenester />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
