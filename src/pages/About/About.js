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
  boxContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100%",
    backgroundColor: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
  },
  card: {
    margin: 8,
    maxHeight: "16vh",
    maxWidth: "80vw",
  },
  cardMedia: {
    height: "18vh",
    width: "80vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "4px 0",
  },
  logoBoxContainer: {
    width: "80%",
    justifyContent: "flex-start",
    margin: "1rem",
  },
  cardBoxContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cardContent: {
    color: "red",
  },
  typo: {
    fontSize: "1.8rem",
    "-webkit-text-fill-color": "#318620",
    "-webkit-text-stroke-width": "1.5px",
    "-webkit-text-stroke-color": "#248d02",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#a4caa1",
    borderRadius: "4px",
    maxWidth: "55%",
    display: "flex",
    flexDirection: "column",
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
}));

const About = () => {
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
    <Zoom in={true}>
      <Box component="div" className={classes.boxContainer}>
        <Box component="div" className={classes.logoBoxContainer}>
          <Logo width="20vw" />
        </Box>
        <Box component="div" className={classes.cardBoxContainer}>
          <CardMedia
            component="div"
            className={classes.cardMedia}
            image={Pic1}
            onClick={() => handleOpen(0)}
          >
            <Typography className={classes.typo} display="block">
              Regnskapsføring
            </Typography>
          </CardMedia>

          <CardMedia
            component="div"
            className={classes.cardMedia}
            image={Pic2}
            onClick={() => handleOpen(1)}
          >
            <Typography className={classes.typo}>Lønn</Typography>
          </CardMedia>

          <CardMedia
            onClick={() => handleOpen(2)}
            component="div"
            className={classes.cardMedia}
            image={Pic3}
          >
            <Typography className={classes.typo}>Årsoppgjør</Typography>
          </CardMedia>
          <CardMedia
            onClick={() => handleOpen(3)}
            component="div"
            className={classes.cardMedia}
            image={Pic4}
          >
            <Typography className={classes.typo}>Rådgivning</Typography>
          </CardMedia>
        </Box>
        {/* Modal */}
        <Modal className={classes.modal} open={open} onClose={handleClose}>
          <Fade in={open}>
            <div className={classes.paper}>
              <h2>{modalData.title}</h2>
              <p>{modalData.description}</p>
              <CloseIcon className={classes.closeIcon} onClick={handleClose} />
            </div>
          </Fade>
        </Modal>
        <BottomNav />
      </Box>
    </Zoom>
  );
};

export default About;
