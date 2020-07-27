import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    width: "100vw",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <Link to="/">
        <BottomNavigationAction icon={<RestoreIcon />} />
      </Link>
      <Link to="/about">
        <BottomNavigationAction icon={<FavoriteIcon />} />
      </Link>
    </BottomNavigation>
  );
}
