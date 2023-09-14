import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import Image from '../../../image/image';
import './gallery-v2.scss';

function GalleryV2({ title, subtitle, gallery = [] }) {
  return (
    <Container className="gallery-v2" fixed>
      <Typography variant="h3" className="gallery-v2-title" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" className="gallery-v2-subtitle" paragraph>
        {subtitle}
      </Typography>
      <Grid container className="desktop-gallery-v2" spacing={2}>
        {gallery?.map((item, index) =>
          index % 6 === 0 || (index - 1) % 6 === 0 ? (
            <Grid item key={item.url} md={6}>
              <Image
                src={item.url}
                alt={item.alternativeText}
                localFile={item.localFile}
                modal={true}
                className="gallery-v2-image"
              />
            </Grid>
          ) : (
            <Grid item key={item.url} md={3}>
              <Image
                src={item.url}
                alt={item.alternativeText}
                localFile={item.localFile}
                modal={true}
                className="gallery-v2-image"
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
        className="mobile-gallery-v2"
      >
        {gallery?.map((item) => (
          <Image
            key={item.url}
            src={item.url}
            alt={item.alternativeText}
            localFile={item.localFile}
            modal={true}
            className="gallery-v2-image"
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default GalleryV2;
