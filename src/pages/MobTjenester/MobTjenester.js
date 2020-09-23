import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";

import Section from "../../components/HomePageSection";
import Data from "../../data/data.json";

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
    display: "flex",
    width: "100vw",
  },
}));

const MobTjenester = () => {
  const classes = useStyles();

  return (
    <Box
      style={{
        backgroundColor: "#2d3436",
        backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
      }}
    >
      <Zoom in={true}>
        <Box className={classes.mobContainer}>
          <Box className={classes.boxContentContainer}>
            {Data.map((item, idx) => (
              <Section
                mob
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))}
          </Box>
        </Box>
      </Zoom>
    </Box>
  );
};

export default MobTjenester;
