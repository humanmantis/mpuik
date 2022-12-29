import React from 'react';
import { makeStyles, Container, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import errorSvg from '../../assets/error.svg';
import PageWaves from '../background/PageWaves';
import useBodyClass from '../../hooks/useBodyClass';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    pointerEvents: 'none',
    zIndex: -1
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    '&:last-of-type': {
      marginBottom: theme.spacing(2)
    }
  },
  textContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  },
  button: {
    marginRight: theme.spacing(2),
    borderRadius: '0.875rem',
    padding: '0.5rem 2rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: theme.spacing(1)
    }
  }
}));

function ErrorPage() {
  const classes = useStyles();
  const history = useHistory();
  useBodyClass('overflow-hidden');

  const reloadPage = () => history.go(0);
  const goHome = () => {
    history.push('/');
    history.go(0);
  };

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
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={reloadPage}>
              Перезавантажити
            </Button>
            <Button variant="outlined" color="primary" className={classes.button} onClick={goHome}>
              На головну
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ErrorPage;
