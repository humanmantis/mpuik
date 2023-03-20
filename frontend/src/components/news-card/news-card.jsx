import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';
import Image from '../image/image';
import Link from '../shared/link/link';
import './news-card.scss';

const NewsCard = ({ item }) => {
  return (
    <Link
      to={`/news/${item.category?.slug || 'no-category'}/${item.slug}`}
      className="news-card-link"
    >
      <Card className="news-card">
        <CardActionArea className="news-card-content">
          <CardMedia className="news-card-media" title={item.title}>
            {item.photo ? (
              <Image
                src={item.photo?.url}
                localFile={item.photo?.localFile}
                alt={item.title}
                objectFit="cover"
                imgWrapperClass="news-card-media"
                className="news-card-media"
              />
            ) : (
              <StaticImage
                src="../../../static/images/default-post.jpg"
                quality={80}
                alt={item.title}
                className="news-card-media"
              />
            )}
          </CardMedia>
          <CardContent className="news-card-content">
            <Typography
              variant="body1"
              className="news-card-category"
              paragraph
            >
              <Link to={`/news/${item.category?.slug || 'no-category'}`}>
                {item.category?.name}
              </Link>
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className="news-card-title"
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              className="news-card-description"
              paragraph
            >
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default NewsCard;
