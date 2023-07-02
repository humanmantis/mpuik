import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from '../../../image/image';
import Markdown from '../../../markdown/markdown';
import './card-fullwidth.scss';

const CardFullwidth = ({ icon, title, description }) => {
  const markdown = description?.data?.childMarkdownRemark.html;

  return (
    <Grid container className="card card-fullwidth">
      <Grid item xs={12} sm={3} className="card-fullwidth-img-wrapper">
        <Image
          src={icon?.url}
          alt={icon?.alternativeText || icon?.hash}
          localFile={icon?.localFile}
          objectFit="contain"
          className="card-fullwidth-img"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography className="card-fullwidth-title">{title}</Typography>
        <section className="card-fullwidth-description">
          <Markdown content={markdown} noMargin />
        </section>
      </Grid>
    </Grid>
  );
};

export default CardFullwidth;
