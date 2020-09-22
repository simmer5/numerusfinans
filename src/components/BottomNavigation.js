import React, { useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  bottomNav: {
    width: "100vw",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    flexGrow: 0,
    alignSelf: "stretch",
    height: "12vh",
  },
});
const LinkUI = forwardRef((props, ref) => (
  <Link ref={ref} to="to" {...props} />
));

const SimpleBottomNavigation = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <BottomNavigation
      className={classes.bottomNav}
      value={selectedTab}
      showLabels
      onChange={(e, newValue) => {
        setSelectedTab(newValue);
        console.log("Cia selectedTab navig", newValue);
      }}
    >
      <BottomNavigationAction
        label="Hjem"
        icon={<RestoreIcon />}
        component={Link}
        to="/"
      />

      <BottomNavigationAction
        label="Tjenester"
        icon={<RestoreIcon />}
        component={Link}
        to="/about"
      />
    </BottomNavigation>
  );
};
export default SimpleBottomNavigation;
