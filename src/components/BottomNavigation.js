import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    //height: "10%",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
  },
});
const LinkUI = React.forwardRef((props, ref) => (
  <Link ref={ref} to="/" {...props} />
));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      showLabels
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Hjem"
        icon={<RestoreIcon />}
        component={LinkUI}
        to="/"
      />

      <BottomNavigationAction
        label="Tjenester"
        icon={<RestoreIcon />}
        component={LinkUI}
        to="/about"
      />
    </BottomNavigation>
  );
}
