import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Container, Grid, Typography, Button } from '@material-ui/core';
import notFoundSvg from '../../assets/page-not-found.svg';
import PageWaves from '../background/PageWaves';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    pointerEvents: 'none',
    zIndex: -1
  },
  title: {
    marginBottom: '3rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },
  button: {
    padding: '0.5rem 3rem',
    fontWeight: 'bold',
    borderRadius: '1rem',
    '&:hover': {
      color: theme.palette.info.main,
      backgroundColor: theme.palette.primary.light
    }
  },
  textContainer: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}));

function PageNotFound() {
  const classes = useStyles();
  return (
    <>
      <PageWaves />
      <Container fixed className="main-container">
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6}>
            <img src={notFoundSvg} alt="Сторінку не знайдено" className={classes.img} />
          </Grid>
          <Grid item md={6} className={classes.textContainer}>
            <Typography variant="h2" className={classes.title}>
              Сторінку не знайдено
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/"
              className={classes.button}
            >
              На головну
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PageNotFound;
