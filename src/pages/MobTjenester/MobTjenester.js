import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";

import { CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import BottomNav from "../../components/BottomNavigation";
import Section from "../../components/HomePageSection";

import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import Pic1 from "../../pics/1.jpeg";
import Pic2 from "../../pics/2.jpeg";
import Pic3 from "../../pics/3.jpeg";
import Pic4 from "../../pics/4.jpeg";
import Logo from "../../Logo/LogoWhite";

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

  // mobContentContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   flexGrow: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   alignSelf: "strech",
  //   height: "85%",
  //   overflow: "scroll",
  //   //overflowX: "hidden",
  //   //overflowY: "hidden",
  //   scrollSnapType: "y mandatory",
  //   width: "100%",
  //   scrollbarWidth: "thin",
  // },
}));

const MobTjenester = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");

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
    <>
      <Zoom in={true}>
        <Box className={classes.mobContainer}>
          <Box className={classes.boxContentContainer}>
            {/* <Box component="div" className={classes.mobContentContainer}> */}
            {/* <Logo width="20vw" /> */}

            <Section mob title="Title 1" description="1 Descriptionas pirmas" />
            <Section mob title="Title 2" description="2 Descriptionas pirmas" />
            <Section mob title="Title 3" description="3 Descriptionas pirmas" />
            <Section mob title="Title 4" description="3 Descriptionas pirmas" />
            <Section mob title="Title 5" description="3 Descriptionas pirmas" />
            {/* </Box> */}
          </Box>
        </Box>
      </Zoom>

      <BottomNav />
    </>
  );
};

export default MobTjenester;
