import React from "react";
import { makeStyles } from "@material-ui/core";
import waveElementSvg from "../../assets/waveElement.svg";

const useStyles = makeStyles((theme) => ({
  background: {},
  waves: {
    position: "absolute",
    width: "2389px",
    height: "1700px",
    filter: "blur(2px) opacity(0.5)",
    backgroundImage: `url(${waveElementSvg})`,
    backgroundRepeat: "no-repeat",
    transform: "scale(0.8)",
    zIndex: -10,
    overflowX: "hidden",
    [theme.breakpoints.only("xl")]: {
      top: "-700px",
      left: "300px",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-800px",
      left: "-300px",
    },
    [theme.breakpoints.only("md")]: {
      top: "-800px",
      left: "-300px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "2461px",
      top: "-900px",
      left: "-200px",
    },
    [theme.breakpoints.only("xs")]: {
      height: "2461px",
      top: "-1000px",
      left: "-400px",
    },
  },
}));

function IndexWaves() {
  const classes = useStyles();

  return <div className={classes.waves} />;
}

export default IndexWaves;
