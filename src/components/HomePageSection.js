import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import ContactIcons from "../components/ContactIcons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    borderBottom: "10px solid white",
    color: "white",
    background: "#171717",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // fontSize: "6vw",
    scrollSnapAlign: "center",
  },
  contentContainer: {
    border: "4px solid white",
    padding: "1.5rem",
    transition: "all 300ms ease 0s",
    "&:hover": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderImage:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,231,1) 57%, rgba(0,212,255,1) 100%) 1",
      transform: "scale(1.01)",
      cursor: "pointer",
    },
  },
  titleContainer: { fontSize: "3.5rem" },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderWidth: "4px",
    borderStyle: "solid",
    borderImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,231,1) 57%, rgba(0,212,255,1) 100%) 1",
    padding: "3rem",
    backgroundColor: "#0B0B0B",
    display: "flex",
    flexDirection: "column",
    width: "45vw",
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
});

const HomePageSection = ({ title, description }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [modalData, setModalData] = useState("");

  const handleOpen = (idx) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.item}>
      <Box>
        <ContactIcons short />
      </Box>
      <Box className={classes.contentContainer} onClick={handleOpen}>
        <Box className={classes.titleContainer}>{title}</Box>
      </Box>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.titleContainer}>{title}</div>
            <p>{description}</p>
            <CloseIcon className={classes.closeIcon} onClick={handleClose} />
          </div>
        </Fade>
      </Modal>
    </Box>
  );
};

export default HomePageSection;
