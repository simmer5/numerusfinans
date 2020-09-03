import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";

import { CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import BottomNav from "../../components/BottomNavigation";

import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import Pic1 from "../../pics/1.jpeg";
import Pic2 from "../../pics/2.jpeg";
import Pic3 from "../../pics/3.jpeg";
import Pic4 from "../../pics/4.jpeg";
import Logo from "../../components/logo";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
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
  logoBoxContainer: {
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "flex-start",
    //width: "100vw",
    margin: "2rem",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    display: " flex",
    flexDirection: "column",
    width: "100vw",
    alignItems: "center",
  },
  content: {
    padding: "1.5rem",
    borderWidth: "4px",
    borderStyle: "solid",
    borderImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,231,1) 57%, rgba(0,212,255,1) 100%) 1",
    cursor: "pointer",
  },
  titleContainer: { fontSize: "2.5rem" },
}));

const MobTjenester = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const contentBtn = (title) => {
    return (
      <Box className={classes.content}>
        <Box className={classes.titleContainer}>{title}</Box>
      </Box>
    );
  };

  const modals = [
    {
      title: "Regnskapsføring",
      description:
        "Bokføring av bilag, avstemming av kontoer, rapportering til myndighetene. Vi kan ta oss av regnskapet fra A til Å, eller bare de delene du ikke ønsker å håndtere selv.",
    },
    {
      title: "Lønn",
      description:
        "Lonn. Vi kan ta oss av regnskapet fra A til Å, eller bare de delene du ikke ønsker å håndtere selv.",
    },
    {
      title: "Årsoppgjør",
      description:
        "Når vi tar tar årsoppgjøret for bedriften din, kan du være sikker på at alle lover og regler er fulgt og at myndighetene får den informasjonen de krever. ",
    },
    {
      title: "Rådgivning",
      description:
        "Vi tilbyr gode råd hvis du trenger du en sparringspartner for spørsmål om bedriftens lønnsomhet, likviditet, skattespørsmål, lån, investeringer og fusjoner.",
    },
  ];

  const handleOpen = (id) => {
    setModalData(modals[id]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.container}>
      <Zoom in={true}>
        <Box component="div" className={classes.mobContentContainer}>
          <Box component="div" className={classes.logoBoxContainer}>
            <Logo width="20vw" />
          </Box>
          <Box className={classes.contentContainer}>
            {contentBtn("Vakaras")}
          </Box>
        </Box>
      </Zoom>
      <Box className={classes.navContainer}>
        <BottomNav />
      </Box>
    </Box>
  );
};

export default MobTjenester;
