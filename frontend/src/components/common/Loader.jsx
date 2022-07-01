import React from 'react';
import { makeStyles, LinearProgress } from '@material-ui/core';
import PageWaves from '../background/PageWaves';

const useStyles = makeStyles({
  progress: {
    zIndex: 5000
  },
  progressContainer: {
    width: '100%'
  }
});

function Loader() {
  const classes = useStyles();
  return (
    <>
      <PageWaves />
      <div className={classes.progressContainer}>
        <LinearProgress className={classes.progress} />
      </div>
    </>
  );
}

export default Loader;
