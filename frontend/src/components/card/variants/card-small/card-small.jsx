import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from '../../../image/image';
import Markdown from '../../../markdown/markdown';
import './card-small.scss';

function CardSmall({ title, description, icon }) {
  const markdown = description?.data?.childMarkdownRemark.html;
  return (
    <Grid container spacing={1} className="card card-small">
      <Grid item xs={3} sm={4} lg={3}>
        <div className="card-small-icon-container">
          <Image
            src={icon.url}
            alt={icon.alternativeText}
            localFile={icon.localFile}
            className="card-small-icon"
            imgWrapperClass='card-small-icon-wrapper'
          />
        </div>
      </Grid>
      <Grid item xs={9} className="card-small-mobile-text">
        <Typography variant="h6" className="card-small-title">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} className="card-small-mobile-text">
        <Markdown content={markdown} />
      </Grid>
      <Grid item sm={8} lg={9} className="card-small-desktop-text">
        <Typography variant="h6" className="card-small-title">
          {title}
        </Typography>
        <Markdown content={markdown} />
      </Grid>
    </Grid>
  );
}

export default CardSmall;
