import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import Markdown from '../common/Markdown';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '1rem',
    height: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: theme.palette.common.white,
    borderRadius: '1rem',
    boxShadow: '0px 7px 25px rgba(143, 134, 196, 0.03)',
    transition: '0.3s',
    '&:hover': {
      boxShadow: '0px 19px 33px rgba(143, 134, 196, 0.18)',
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '0.5rem',
    '&:nth-child(1n)': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:nth-child(2n)': {
      backgroundColor: theme.palette.info.main,
    },
    '&:nth-child(3n)': {
      backgroundColor: '#1B1365',
    },
    '&:nth-child(4n)': {
      backgroundColor: '#EB5757',
    },
  },
  icon: {
    margin: 'auto',
    width: '100%',
    color: theme.palette.common.white,
    filter: 'invert()',
    pointerEvents: 'none',
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.info.main,
    [theme.breakpoints.only('xs')]: {
      marginLeft: '0.3rem',
    },
  },
}));

function CardMiddle({ title, description, icon }) {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.card}>
      <Grid container xs={12} alignItems="center">
        <Grid item xs={3} sm={4} lg={3}>
          <div className={classes.iconContainer}>
            <img
              src={process.env.REACT_APP_IMAGE_URI + icon.url}
              alt={icon.alternativeText}
              className={classes.icon}
            />
          </div>
        </Grid>
        <Grid item xs={9} sm={8} lg={9}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Markdown content={description} />
      </Grid>
    </Grid>
  );
}

CardMiddle.defaultProps = {
  variant: 'middle',
  description: '',
};

CardMiddle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardMiddle;
