import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from '../../../image/image';
import Markdown from '../../../markdown/markdown';
import './card-big.scss';

function CardBig({ title, description, icon }) {
  const markdown = description?.data?.childMarkdownRemark.html;
  return (
    <Grid container spacing={1} className="card card-big">
      <Grid item xs={3} lg={2}>
        <div className="card-big-icon-container">
          <Image
            src={icon.url}
            alt={icon.alternativeText}
            localFile={icon.localFile}
            className="card-big-icon"
            imgWrapperClass='card-big-icon-wrapper'
          />
        </div>
      </Grid>
      <Grid item xs={9} className="card-big-mobile-text">
        <Typography variant="h6" className="card-big-title">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} className="card-big-mobile-text">
        <Markdown content={markdown} />
      </Grid>
      <Grid item xs={9} lg={10} className="card-big-desktop-text">
        <Typography variant="h6" className="title">
          {title}
        </Typography>
        <Markdown content={markdown} />
      </Grid>
    </Grid>
  );
}

export default CardBig;
