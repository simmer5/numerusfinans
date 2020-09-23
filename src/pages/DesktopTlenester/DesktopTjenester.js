import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Zoom from "@material-ui/core/Zoom";

import HomePageSection from "../../components/HomePageSection";
import Data from "../../data/data.json";

const useStyles = makeStyles({
  boxContentContainer: {
    maxHeight: "85vh",
    overflow: "scroll",
    overflowX: "hidden",

    scrollSnapType: "y mandatory",

    scrollbarWidth: "thin",
  },
});

const DesktopTjenester = () => {
  const classes = useStyles();

  return (
    <>
      <Zoom in={true}>
        <Box className={classes.boxContentContainer} component="div">
          {Data.map((item, idx) => (
            <HomePageSection
              web
              key={idx}
              title={item.title}
              description={item.description}
            />
          ))}
        </Box>
      </Zoom>
    </>
  );
};

export default DesktopTjenester;
