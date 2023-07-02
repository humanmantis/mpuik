import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SquareRounded from '@mui/icons-material/SquareRounded';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from 'react-material-ui-carousel';
import Image from '../image/image';
import Link from '../shared/link/link';
import './news-carousel.scss';

function NewsCarousel({ items }) {
  return (
    <Carousel
      navButtonsAlwaysInvisible={false}
      animation="slide"
      interval={5000}
      IndicatorIcon={<SquareRounded fontSize="small" />}
      indicatorContainerProps={{ className: 'news-carousel-indicators' }}
      indicatorIconButtonProps={{ className: 'news-carousel-indicator-button' }}
      activeIndicatorIconButtonProps={{
        className: 'news-carousel-active-indicator-button',
      }}
      autoPlay={true}
      swipe={true}
      className="news-carousel-container"
    >
      {items.map((item) => (
        <Grid container key={item.slug} className="news-carousel-item">
          <Grid item xs={12} md={6} zIndex="-1">
            {item.photo ? (
              <Image
                src={item.photo?.url}
                localFile={item.photo?.localFile}
                alt={item.title}
                quality={80}
                imgWrapperClass="news-carousel-image"
                className="news-carousel-image"
                imgClassName="news-carousel-image"
              />
            ) : (
              <StaticImage
                src="../../../static/images/default-post.jpg"
                alt={item.title}
                quality={80}
                className="news-carousel-image"
                imgClassName="news-carousel-image"
              />
            )}
          </Grid>
          <Grid item xs={12} md={6} className="news-carousel-text-container">
            {item.category && (
              <Button
                className="news-carousel-category-button"
                component={Link}
                to={`/news/${item.category.slug || 'no-category'}`}
              >
                {item.category.name}
              </Button>
            )}
            <Typography
              variant="h4"
              className="news-carousel-title"
              component={Link}
              to={`/news/${item.category?.slug || 'no-category'}/${item.slug}`}
              gutterBottom
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              className="news-carousel-text"
              paragraph
            >
              {item.description}
            </Typography>
            <Button
              component={Link}
              to={`/news/${item.category?.slug || 'no-category'}/${item.slug}`}
              className="news-carousel-read-button"
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
