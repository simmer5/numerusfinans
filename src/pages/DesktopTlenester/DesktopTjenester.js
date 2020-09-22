import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TopNav from "../../components/TopNavigation";
import Zoom from "@material-ui/core/Zoom";

import HomePageSection from "../../components/HomePageSection";

const useStyles = makeStyles({
  boxContentContainer: {
    maxHeight: "85vh",
    overflow: "scroll",
    overflowX: "hidden",
    //overflowY: "hidden",
    scrollSnapType: "y mandatory",
    //width: "100%",
    scrollbarWidth: "thin",
  },
});

const DesktopTjenester = () => {
  const classes = useStyles();

  const data = [
    {
      id: 0,
      title: "Regnskapsføring",
      description:
        "Bokføring av bilag, avstemming av kontoer, rapportering til myndighetene. Vi kan ta oss av regnskapet fra A til Å, eller bare de delene du ikke ønsker å håndtere selv.",
    },
    {
      id: 1,
      title: "Lønn",
      description:
        "Lonn. Vi kan ta oss av regnskapet fra A til Å, eller bare de delene du ikke ønsker å håndtere selv.",
    },
    {
      id: 2,
      title: "Årsoppgjør",
      description:
        "Når vi tar tar årsoppgjøret for bedriften din, kan du være sikker på at alle lover og regler er fulgt og at myndighetene får den informasjonen de krever. ",
    },
    {
      id: 3,
      title: "Rådgivning",
      description:
        "Vi tilbyr gode råd hvis du trenger du en sparringspartner for spørsmål om bedriftens lønnsomhet, likviditet, skattespørsmål, lån, investeringer og fusjoner.",
    },
  ];

  return (
    <>
      <TopNav />
      <Zoom in={true}>
        <Box className={classes.boxContentContainer} component="div">
          {data.map((item, idx) => (
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
