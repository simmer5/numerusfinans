import React from "react";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import BottomNav from "../../components/BottomNavigation";

import ContactIcons from "../../components/ContactIcons";
import Logo from "../../components/logo";

const useStyles = makeStyles({
  mobContainer: {
    backgroundColor: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    //justifyContent: "center",
  },
  mobContentContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navContainer: {
    flexGrow: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  typo: {
    color: "white",
    width: "80%",
    fontFamily: "Tahoma, Geneva, sans-serif",
  },
  divider: {
    margin: "25px 0px",
    borderColor: "white",
    width: "80%",
    borderWidth: "1px 0 0 0",
    borderStyle: "solid",
  },

  iContainer: {
    margin: "1.5rem",
  },
});
const MobHome = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mobContainer}>
      <Zoom in={true}>
        <Box className={classes.mobContentContainer}>
          <Logo width="45vw" />
          <Divider className={classes.divider} />
          <Typography align="center" className={classes.typo}>
            Regnskap tjenester for stotre og melomstire bedrifter
          </Typography>
          <Box className={classes.iContainer}>
            <ContactIcons short />
          </Box>
        </Box>
      </Zoom>
      <Box className={classes.navContainer}>
        <BottomNav />
      </Box>
    </Box>
  );
};

export default MobHome;
