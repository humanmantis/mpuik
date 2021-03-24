import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import defaultPostImg from '../../assets/default-post.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '500px',
  },
  img: {
    display: 'block',
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    [theme.breakpoints.only('sm')]: {
      height: '400px',
    },
    [theme.breakpoints.only('xs')]: {
      height: '300px',
    },
  },
  textContainer: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    padding: '2rem',
  },
  categoryButton: {
    padding: '0.5rem 2rem',
    marginBottom: '1rem',
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    fontWeight: 600,
    '&:hover': {
      color: theme.palette.info.main,
      backgroundColor: theme.palette.primary.light,
    },
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 600,
    maxWidth: '700px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 2,
    boxOrient: 'vertical',
  },
  text: {
    color: theme.palette.common.white,
    maxWidth: '700px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 4,
    boxOrient: 'vertical',
    [theme.breakpoints.only('xs')]: {
      lineClamp: 2,
    },
  },
  readButton: {
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    padding: '0.7rem 3rem',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    borderRadius: '1rem',
    fontWeight: 'bold',
    zIndex: 7,
    '&:hover': {
      color: theme.palette.info.main,
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
      position: 'unset',
    },
  },
  indicators: {
    position: 'absolute',
    left: '-4rem',
    bottom: '3rem',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      position: 'unset',
      textAlign: 'center',
    },
  },
  indicatorButton: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.info.light,
    },
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.primary.light,
      margin: '0.3rem',
      fontSize: '1.5rem',
    },
  },
  activeIndicatorButton: {
    color: theme.palette.info.main,
  },
}));

function NewsCarousel({ items }) {
  const classes = useStyles();
  return (
    <Carousel
      navButtonsAlwaysInvisible={true}
      animation="slide"
      interval={5000}
      indicatorContainerProps={{ className: classes.indicators }}
      indicatorIconButtonProps={{ className: classes.indicatorButton }}
      activeIndicatorIconButtonProps={{
        className: classes.activeIndicatorButton,
      }}
      classNale={classes.container}
    >
      {items.map((item) => (
        <Grid container>
          <Grid item xs={12} md={6}>
            <img
              src={
                item?.photo?.url
                  ? process.env.REACT_APP_IMAGE_URI + item?.photo?.url
                  : defaultPostImg
              }
              alt={item.title}
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.textContainer}>
            {item?.category && (
              <Button
                className={classes.categoryButton}
                component={RouterLink}
                to={`/news/${item?.category?.slug}`}
              >
                {item?.category?.name}
              </Button>
            )}
            <Typography variant="h4" className={classes.title} gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body1" className={classes.text} paragraph>
              {item.description}
            </Typography>
            <Button
              component={RouterLink}
              to={`/news/${item?.category?.slug}/${item.slug}`}
              className={classes.readButton}
            >
              Читати
            </Button>
          </Grid>
        </Grid>
      ))}
    </Carousel>
  );
}

export default NewsCarousel;
