import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Container, Grid, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    marginTop: '3rem',
    marginBottom: '3rem'
  },
  desktopGallery: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mobileGallery: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  carouselImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    backgroundColor: theme.palette.grey[300],
    borderRadius: '0.5rem'
  },
  title: {
    fontWeight: '600',
    color: theme.palette.primary.main
  },
  subtitle: {
    maxWidth: '600px'
  }
}));

function GalleryV1({ title, subtitle, gallery }) {
  const classes = useStyles();
  return (
    <Container className={classes.galleryContainer} fixed>
      <Typography variant="h3" className={classes.title} gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle} paragraph>
        {subtitle}
      </Typography>
      <Grid container className={classes.desktopGallery} spacing={2}>
        {gallery.map((item, index) =>
          index % 4 === 0 || (index + 1) % 4 === 0 ? (
            <Grid item key={item.attributes.hash} md={8}>
              <img
                src={item.attributes.url}
                alt={item.attributes.alternativeText}
                className={classes.carouselImage}
              />
            </Grid>
          ) : (
            <Grid item key={item.attributes.hash} md={4}>
              <img
                src={item.attributes.url}
                alt={item.attributes.alternativeText}
                className={classes.carouselImage}
              />
            </Grid>
          )
        )}
      </Grid>
      <Carousel
        animation="slide"
        navButtonsAlwaysInvisible={true}
        className={classes.mobileGallery}
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

GalleryV1.defaultProps = {
  gallery: []
};

GalleryV1.propTypes = {
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

export default GalleryV1;
