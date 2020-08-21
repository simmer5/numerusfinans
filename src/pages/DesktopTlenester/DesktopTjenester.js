import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import HomePageSection from "../../components/HomePageSection";

const useStyles = makeStyles({
  boxContainer: {
    maxHeight: "100vh",
    overflow: "scroll",
    scrollSnapType: "y mandatory",
  },
});

const DesktopTjenester = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer} component="div">
      <HomePageSection title="Regnskapsføring" />
      <HomePageSection title="Lønn" />
      <HomePageSection title="Årsoppagve" />
      <HomePageSection title="Rodgivning" />
    </Box>
  );
};

export default DesktopTjenester;
