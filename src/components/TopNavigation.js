import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Logo from "../Logo/LogoWhite";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  topNav: {
    borderBottom: "8px solid white",
    minHeight: "15vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#171717",
  },

  logBox: {
    display: "flex",
    alignItems: "center",
    margin: "1rem",
  },
  button: {
    fontFamily: "Red Hat Text, sans-serif",
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: "2rem",
  },
});

const LinkUI = React.forwardRef((props, ref) => (
  <Link ref={ref} to="/" {...props} />
));

const TopNavigation = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.topNav}>
      <Box className={classes.logBox}>
        <Logo width="13vw" />
      </Box>

      <Toolbar variant="regular" className={classes.toolBar}>
        <Button
          component={Link}
          to="/"
          color="inherit"
          className={classes.button}
        >
          Hjem
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          className={classes.button}
        >
          Tjenester
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
