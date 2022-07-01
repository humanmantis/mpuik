import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Container, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    marginTop: '3rem',
    marginBottom: '3rem'
  },
  gallery: {
    display: 'block'
  },
  carouselImage: {
    width: '100%',
    height: '700px',
    objectFit: 'contain',
    borderRadius: '0.5rem',
    [theme.breakpoints.only('xs')]: {
      height: '300px'
    }
  },
  carouselButton: {
    opacity: 0.1,
    transition: '0.5s',
    '&:hover': {
      opacity: 1
    }
  },
  title: {
    fontWeight: '600',
    color: theme.palette.primary.main
  },
  subtitle: {
    maxWidth: '600px'
  }
}));

function SliderGallery({ title, subtitle, gallery }) {
  const classes = useStyles();
  return (
    <Container className={classes.galleryContainer} fixed>
      <Typography variant="h3" className={classes.title} gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle} paragraph>
        {subtitle}
      </Typography>
      <Carousel
        animation="slide"
        className={classes.gallery}
        navButtonsWrapperProps={{ className: classes.carouselButton }}
      >
        {gallery.map((item) => (
          <img
            key={item.attributes.hash}
            src={item.attributes.url}
            alt={item.attributes.alternativeText}
            className={classes.carouselImage}
          />
        ))}
      </Carousel>
    </Container>
  );
}

SliderGallery.defaultProps = {
  gallery: []
};

SliderGallery.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired
      })
    })
  ).isRequired
};

export default SliderGallery;
