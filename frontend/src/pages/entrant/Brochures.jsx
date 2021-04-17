import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import Loader from '../../components/common/Loader';
import Layout from '../../components/common/Layout';

const GetBrochuresPage = loader(
  '../../graphql/pages/entrant/GetBrochuresPage.gql'
);

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    height: '700px',
    objectFit: 'contain',
    borderRadius: '0.5rem',
    [theme.breakpoints.only('xs')]: {
      height: '300px',
    },
  },
  carouselButton: {
    opacity: 0.1,
    transition: '0.5s',
    '&:hover': {
      opacity: 1,
    },
  },
}));

function Brochures() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GetBrochuresPage);

  const brochure = data?.brochure;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <Layout title={brochure.title} subtitle={brochure.subtitle}>
      {brochure.brochures && (
        <Carousel
          animation="slide"
          fullHeightHover={false}
          navButtonsWrapperProps={{ className: classes.carouselButton }}
        >
          {brochure.brochures?.map((p) => (
            <img
              key={p.id}
              src={process.env.REACT_APP_IMAGE_URI + p.url}
              alt={p.alternativeText}
              className={classes.img}
            />
          ))}
        </Carousel>
      )}
    </Layout>
  );
}

export default Brochures;
