import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: '3.5rem',
    pointerEvents: 'none',
  },
  logoLink: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
  logoTitle: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    lineHeight: '1.7rem',
    color: theme.palette.info.main,
    margin: 0,
  },
  logoSubTitle: {
    fontSize: '0.6rem',
    fontWeight: 'bold',
    color: theme.palette.info.main,
    margin: 0,
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <NavLink to="/">
          <img src={logo} className={classes.logo} alt="МПУіК" />
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink to="/" className={classes.logoLink}>
          <Typography variant="subtitle1" className={classes.logoTitle}>
            МПУіК
          </Typography>
          <Typography variant="subtitle2" className={classes.logoSubTitle}>
            Сторінка Кафедри
          </Typography>
        </NavLink>
      </Grid>
    </Grid>
  );
}

export default Logo;
