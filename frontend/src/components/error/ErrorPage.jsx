import React from 'react';
import { makeStyles, Container, Grid, Typography } from '@material-ui/core';
import errorSvg from '../../assets/error.svg';
import PageWaves from '../background/PageWaves';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    pointerEvents: 'none',
    zIndex: -1
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },
  textContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  }
}));

function ErrorPage() {
  const classes = useStyles();
  return (
    <>
      <PageWaves />
      <Container fixed className="main-container">
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6}>
            <img src={errorSvg} alt="Щось пішло не так" className={classes.img} />
          </Grid>
          <Grid item md={6} className={classes.textContainer}>
            <Typography variant="h2" className={classes.title}>
              Ой-йой &#x1F61E;
            </Typography>
            <Typography variant="h4" className={classes.title} gutterBottom>
              Щось пішло не так...
            </Typography>
            <Typography variant="body1" className={classes.title}>
              Спробуйте зайти пізніше.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ErrorPage;
