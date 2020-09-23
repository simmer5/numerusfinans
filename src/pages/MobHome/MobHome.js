import React from "react";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ContactIcons from "../../components/ContactIcons";
import Logo from "../../Logo/LogoWhite";

const useStyles = makeStyles({
  mobContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "88vh",
    backgroundColor: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
  },
  mobContentContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "strech",
    height: "100%",
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
            Regnskap tjenester for store og melomstore bedrifter
          </Typography>
          <Box className={classes.iContainer}>
            <ContactIcons
              short
              anchorVertical="bottom"
              anchorHorizontal="center"
              transformVertical="top"
              transformHorizontal="center"
            />
          </Box>
        </Box>
      </Zoom>
    </Box>
  );
};

export default MobHome;
