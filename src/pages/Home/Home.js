import React from "react";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import BottomNav from "../../components/BottomNavigation";

import Logo from "../../components/logo";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100%",
    backgroundColor: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mobContentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
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
});
const Home = () => {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <Box component="div" className={classes.box}>
        <Box className={classes.mobContentContainer}>
          <Logo width="45vw" />
          <Divider className={classes.divider} />
          <Typography align="center" className={classes.typo}>
            Regnskap tjenester for stotre og melomstire bedrifter
          </Typography>
        </Box>

        <BottomNav />
      </Box>
    </Zoom>
  );
};

export default Home;
