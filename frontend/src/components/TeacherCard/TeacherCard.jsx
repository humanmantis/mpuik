import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Paper, Typography, Link, makeStyles } from '@material-ui/core';
import defaultProfileImage from '../../assets/default-profile.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: 'center',
    padding: '0.5rem',
    borderRadius: '1rem',
    transition: '0.3s',
    boxShadow: '0px 7px 25px rgba(143, 134, 196, 0.03)',
    '&:hover': {
      boxShadow: '0px 19px 33px rgba(143, 134, 196, 0.18)',
    },
  },
  link: {
    textDecoration: 'none',
    transition: '0.3s',
    color: theme.palette.secondary.main,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
  },
  title: {
    fontWeight: 'bold',
  },
}));

function TeacherCard({ route, photo, fullname, position }) {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <Link className={classes.link} component={RouterLink} to={route}>
        <img
          src={
            photo?.url
              ? process.env.REACT_APP_IMAGE_URI + photo?.url
              : defaultProfileImage
          }
          alt={photo?.alternativeText ?? 'Default Photo'}
          className={classes.img}
        />

        <Typography variant="h5" className={classes.title}>
          {fullname}
        </Typography>
        <Typography variant="subtitle2">{position}</Typography>
      </Link>
    </Paper>
  );
}

TeacherCard.propTypes = {
  fullname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
  }),
};

export default TeacherCard;
