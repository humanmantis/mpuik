import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Markdown from "../common/Markdown";
import clsx from "clsx";

import { useStyles } from "./arrangementBlock.styles";

const ArrangementBlock = ({ icon, title, description }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={3} className={classes.imgWrapper}>
        <img
          src={icon?.attributes?.url}
          alt={icon?.attributes?.alternativeText || icon?.attributes?.hash}
          className={classes.img}
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography className={classes.title}>{title}</Typography>
        <section className={clsx(classes.text, classes.description)}>
          <Markdown content={description} noMargin />
        </section>
      </Grid>
    </Grid>
  );
};

export default ArrangementBlock;
