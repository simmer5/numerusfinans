import React, { useState } from "react";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles(
  {
    root: { top: "210px" },
    paper: {
      border: "2px solid #00A6FF",
      backgroundColor: "#171717",
      marginTop: "1rem",
    },

    iContainer: { display: "flex", flexDirection: "row" },
    iContainerShort: {
      display: "flex",
      width: "100%",
      height: "100%",
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
      transition: "all 300ms ease 0s",
      "&:hover": {
        borderStyle: "solid",
        borderImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,231,1) 57%, rgba(0,212,255,1) 100%) 1",
        transform: "scale(1.01)",
        cursor: "pointer",
      },
    },
    popTitle: {
      padding: "1rem",
      color: "#00a6ff",
    },
  },
  { name: "MuiPopover" }
);
const ContactIcons = ({ long, short }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => {
    //const kablys = document.querySelector("#kablys");
    setAnchorEl(e.currentTarget);
    setValue(e.currentTarget.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  //const id = open ? "simple-popover" : undefined;

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
              id="kablys"
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

            <Popover
              disablePortal={true}
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
              <div className={classes.popTitle}>{value}</div>
            </Popover>
          </Box>
        </>
      )}
    </>
  );
};

export default ContactIcons;
