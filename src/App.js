import React, { useEffect, useState } from "react";
import Home from "../src/pages/Home/";
import About from "../src/pages/About";
import DesktopTjenester from "./pages/DesktopTlenester";
import "./App.css";
import BottomNavigation from "../src/components/BottomNavigation";
import TopNavigation from "./components/TopNavigation";
import Zoom from "@material-ui/core/Zoom";

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
    <div
      style={{
        height: "100vh",
        backgroundColor: "#2d3436",
        backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            {width < breakpoint ? <About /> : <DesktopTjenester />}
          </Route>
        </Switch>

        {/* {width < breakpoint ? <BottomNavigation /> : <TopNavigation />} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
