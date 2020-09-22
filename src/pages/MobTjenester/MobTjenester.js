import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";

import Section from "../../components/HomePageSection";

const useStyles = makeStyles((theme) => ({
  mobContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "88vh",
    backgroundColor: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    overflow: "scroll",
    overflowY: "hidden",
    scrollSnapType: "x mandatory",
    scrollbarWidth: "thin",
  },
  boxContentContainer: {
    alignSelf: "stretch",
    flexGrow: 1,
    //height: "85vh",
    display: "flex",
    width: "100vw",
  },
}));

const MobTjenester = () => {
  const classes = useStyles();

  return (
    <>
      <Zoom in={true}>
        <Box className={classes.mobContainer}>
          <Box className={classes.boxContentContainer}>
            <Section mob title="Title 1" description="1 Descriptionas pirmas" />
            <Section mob title="Title 2" description="2 Descriptionas pirmas" />
            <Section mob title="Title 3" description="3 Descriptionas pirmas" />
            <Section mob title="Title 4" description="3 Descriptionas pirmas" />
            <Section mob title="Title 5" description="3 Descriptionas pirmas" />
          </Box>
        </Box>
      </Zoom>
    </>
  );
};

export default MobTjenester;
