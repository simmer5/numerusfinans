import React, { useState } from "react";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles({
  iContainer: { display: "flex", flexDirection: "row" },
  iContainerShort: {
    display: "flex",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  iFrame: {
    background: "none",
    color: "#00a6ff",
    border: "4px solid white",
    margin: "1rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "15vw",
  },
  iText: {
    marginLeft: "1rem",
  },
  iModal: { position: "absolute" },
});
const ContactIcons = ({ long, short }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setValue(e.currentTarget.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {long && (
        <Box className={classes.iContainer}>
          <Box className={classes.iFrame}>
            <CallIcon />

            <Box className={classes.iText}> +47 401 72372</Box>
          </Box>
          <Box className={classes.iFrame}>
            <MailIcon />
            <Box className={classes.iText}> post@numerusfinans.no</Box>
          </Box>
          <Box className={classes.iFrame}>
            <LocationOnIcon />
            <Box className={classes.iText}>Regnbueveien 2, 1405 Langhus</Box>
          </Box>
        </Box>
      )}
      {/* ========== Short version========== */}
      {short && (
        <>
          <Box className={classes.iContainerShort}>
            <Box
              component="button"
              value="+47 401 72372"
              className={classes.iFrame}
              onClick={handleOpen}
            >
              <CallIcon />
            </Box>
            <Box
              component="button"
              className={classes.iFrame}
              onClick={handleOpen}
              value="post@numerusfinans.no"
            >
              <MailIcon />
            </Box>
            <Box
              component="button"
              className={classes.iFrame}
              onClick={handleOpen}
              value="Regnbueveien 2, 1405 Langhus"
            >
              <LocationOnIcon />
            </Box>
            <Box>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <div>{value}</div>
              </Popover>
            </Box>
            {/* <Modal
              component="div"
              open={open}
              onClose={handleClose}
              disablePortal={true}
              className={classes.iModal}
            >
              <Fade in={open}>
                <div>{value}</div>
              </Fade>
            </Modal> */}
          </Box>
        </>
      )}
    </>
  );
};

export default ContactIcons;
