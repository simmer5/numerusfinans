import React from "react";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import TopNav from "../../components/TopNavigation";
import ContactIcons from "../../components/ContactIcons";

import Logo from "../../Logo/LogoWhite";

const useStyles = makeStyles({
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#171717",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "85vh",
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
const DesktopHome = () => {
  const classes = useStyles();
  return (
    <>
      <TopNav />
      <Zoom in={true}>
        <Box className={classes.contentContainer}>
          <Logo width="45vw" />
          <Divider className={classes.divider} />
          <Typography align="center" className={classes.typo}>
            Regnskap tjenester for stotre og melomstore bedrifter
          </Typography>
          <Box>
            <ContactIcons long />
          </Box>
        </Box>
      </Zoom>
    </>
  );
};

export default DesktopHome;
