import React, { useEffect, useState } from "react";
import MobHome from "../src/pages/MobHome";
import MobTjenester from "../src/pages/MobTjenester";
import DesktopTjenester from "./pages/DesktopTlenester";
import "./App.css";
import DesktopHome from "./pages/DesktopHome";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 720;

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
            {width < breakpoint ? <MobHome /> : <DesktopHome />}
          </Route>

          <Route path="/about">
            {width < breakpoint ? <MobTjenester /> : <DesktopTjenester />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
