import React from 'react';
import { makeStyles } from '@material-ui/core';
import topWavesSvg from '../../assets/topWaves.svg';
import rightWavesSvg from '../../assets/rightWaves.svg';

const useStyles = makeStyles((theme) => ({
  background: {},
  topWaves: {
    position: 'absolute',
    top: '-100px',
    left: '-100px',
    width: '842px',
    height: '1109px',
    filter: 'blur(2px) opacity(0.5)',
    backgroundImage: `url(${topWavesSvg})`,
    backgroundRepeat: 'no-repeat',
    transform: 'scale(0.8)',
    zIndex: -10,
    overflowX: 'hidden',
    [theme.breakpoints.only('md')]: {
      top: '-120px',
      left: '-250px'
    },
    [theme.breakpoints.only('sm')]: {
      top: '-180px',
      left: '-300px'
    },
    [theme.breakpoints.only('xs')]: {
      top: '-200px',
      left: '-300px'
    }
  },
  rightWaves: {
    position: 'absolute',
    top: '-200px',
    right: '-150px',
    width: '1358px',
    height: '1082px',
    filter: 'blur(2px) opacity(0.5)',
    backgroundImage: `url(${rightWavesSvg})`,
    backgroundRepeat: 'no-repeat',
    transform: 'scale(0.8)',
    zIndex: -10,
    overflowX: 'hidden',
    [theme.breakpoints.down('lg')]: {
      top: '-170px',
      right: '-150px'
    },
    [theme.breakpoints.only('sm')]: {
      top: '-160px',
      right: '-500px'
    },
    [theme.breakpoints.only('xs')]: {
      top: '-130px',
      right: '-600px'
    }
  }
}));

function PageWaves() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.topWaves} />
      <div className={classes.rightWaves} />
    </>
  );
}

export default PageWaves;
