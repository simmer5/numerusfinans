import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    borderBottom: "10px solid white",
    color: "white",
    background: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "6vw",
    scrollSnapAlign: "center",
  },
});

const HomePageSection = ({ title }) => {
  const classes = useStyles();
  return <Box className={classes.item}>{title}</Box>;
};

export default HomePageSection;
