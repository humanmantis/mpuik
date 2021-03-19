import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, Typography } from "@material-ui/core";

import TopWaves from "../../components/background/PageWaves";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "600px",
    [theme.breakpoints.only("lg")]: {
      height: "550px",
    },
    [theme.breakpoints.only("md")]: {
      height: "550px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.only("xs")]: {
      height: "150px",
    },
  },
  top: {
    margin: "0 auto",
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: "3rem",
  },
}));

const Layout = ({ children, title, subtitle }) => {
  const classes = useStyles();
  return (
    <>
      <TopWaves />
      <Container className="main-container" fixed>
        <Grid className={classes.top}>
          <Typography
            variant="h3"
            align="center"
            className={classes.title}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle}
            paragraph
          >
            {subtitle}
          </Typography>
        </Grid>
        {children}
      </Container>
    </>
  );
};

export default Layout;
