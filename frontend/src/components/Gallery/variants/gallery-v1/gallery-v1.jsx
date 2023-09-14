import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';

import Image from '../../../image/image';
import './gallery-v1.scss'

function GalleryV1({ title, subtitle, gallery = [] }) {
  return (
    <Container className='gallery-v1' fixed>
      <Typography variant="h3" className='gallery-v1-title' gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" className='gallery-v1-subtitle' paragraph>
        {subtitle}
      </Typography>
      <Grid container className='desktop-gallery-v1' spacing={2}>
        {gallery?.map((item, index) =>
          index % 4 === 0 || (index + 1) % 4 === 0 ? (
            <Grid item key={item.url} md={8}>
              <Image
                src={item.url}
                alt={item.alternativeText}
                localFile={item.localFile}
                modal={true}
                className='gallery-v1-image'
              />
            </Grid>
          ) : (
            <Grid item key={item.url} md={4}>
              <Image
                src={item.url}
                alt={item.alternativeText}
                localFile={item.localFile}
                modal={true}
                className='gallery-v1-image'
              />
            </Grid>
          )
        )}
      </Grid>
      <Carousel
        animation="slide"
        navButtonsAlwaysInvisible={true}
        stopAutoPlayOnHover={true}
        swipe={false}
        className='mobile-gallery-v1'
      >
        {gallery?.map((item) => (
          <Image
            key={item.url}
            src={item.url}
            alt={item.alternativeText}
            localFile={item.localFile}
            modal={true}
            className='gallery-v1-image'
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default GalleryV1;
