import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import Image from '../../../image/image';
import './gallery-slider.scss';

function SliderGallery({ title, subtitle, gallery = [] }) {
  return (
    <Container className="gallery-slider" fixed>
      <Typography variant="h3" className="gallery-slider-title" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className="gallery-slider-subtitle"
        paragraph
      >
        {subtitle}
      </Typography>
      <Carousel
        animation="slide"
        className="gallery-slider-carousel"
        stopAutoPlayOnHover={true}
        cycleNavigation={true}
        swipe={false}
        navButtonsAlwaysVisible={true}
        navButtonsWrapperProps={{ className: 'gallery-slider-button' }}
      >
        {gallery?.map((item) => (
          <Image
            key={item.url}
            src={item.url}
            alt={item.alternativeText}
            localFile={item.localFile}
            objectFit="contain"
            className={item.className || 'gallery-slider-image'}
            modal
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default SliderGallery;
