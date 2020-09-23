import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: { color: "#ffffff" },

  bottomNav: {
    width: "100vw",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    flexGrow: 0,
    alignSelf: "stretch",
    height: "12vh",
  },
});

const SimpleBottomNavigation = () => {
  const classes = useStyles();
  const pathname = window.location.pathname;
  const [selectedTab, setSelectedTab] = useState(pathname);

  return (
    <BottomNavigation
      className={classes.bottomNav}
      value={selectedTab}
      showLabels
      onChange={(e, newValue) => {
        setSelectedTab(newValue);
      }}
    >
      <BottomNavigationAction
        label="Hjem"
        icon={<HomeIcon />}
        component={Link}
        to="/"
        value="/"
        classes={{ root: classes.root }}
      />

      <BottomNavigationAction
        label="Tjenester"
        icon={<WorkIcon />}
        component={Link}
        to="/about"
        value="/about"
        classes={{ root: classes.root }}
      />
    </BottomNavigation>
  );
};
export default SimpleBottomNavigation;
