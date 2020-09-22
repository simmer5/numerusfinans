import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import ContactIcons from "../components/ContactIcons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  webSection: {
    borderBottom: "10px solid white",
    background: "#171717",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    justifyContent: "space-between",
    height: "85vh",
    scrollSnapAlign: "center",
  },
  mobSection: {
    borderBottom: "10px solid white",
    background: "#171717",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    justifyContent: "space-between",
    //height: "85vh",
    scrollSnapAlign: "center",
    flexGrow: 1,
    alignSelf: "stretch",
  },

  contentContainer: {
    flexGrow: 1,
    //flexShrink: 0,
    alignSelf: "center",
    display: "flex",
    width: "100vw",
    justifyContent: "center",
  },
  btnContainer: {
    //marginTop: "20vh",
    alignSelf: "center",
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
  titleContainer: { fontSize: "2.5rem" },
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
  ContactIconsContainer: {
    alignSelf: "flex-end",
    margin: "1rem",
  },
});

const HomePageSection = ({ title, description, mob, web }) => {
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
    <>
      {web && (
        <Box className={classes.webSection}>
          <Box className={classes.ContactIconsContainer}>
            <ContactIcons short />
          </Box>
          <Box className={classes.contentContainer}>
            <Box className={classes.btnContainer} onClick={handleOpen}>
              <Box className={classes.titleContainer}>{title}</Box>
            </Box>
          </Box>
          <Modal className={classes.modal} open={open} onClose={handleClose}>
            <Fade in={open}>
              <div className={classes.paper}>
                <div className={classes.titleContainer}>{title}</div>
                <p>{description}</p>
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={handleClose}
                />
              </div>
            </Fade>
          </Modal>
        </Box>
      )}
      {/* ====== Mob section ========= */}
      {mob && (
        <Box className={classes.mobSection}>
          <Box className={classes.contentContainer}>
            <Box className={classes.btnContainer} onClick={handleOpen}>
              <Box className={classes.titleContainer}>{title}</Box>
            </Box>
          </Box>

          <Modal className={classes.modal} open={open} onClose={handleClose}>
            <Fade in={open}>
              <div className={classes.paper}>
                <div className={classes.titleContainer}>{title}</div>
                <p>{description}</p>
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={handleClose}
                />
              </div>
            </Fade>
          </Modal>
        </Box>
      )}
    </>
  );
};

export default HomePageSection;
