import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from '../../../image/image';
import Markdown from '../../../markdown/markdown';
import './card-middle.scss';

function CardMiddle({ title, description, icon }) {
  const markdown = description?.data?.childMarkdownRemark.html;
  return (
    <Grid container spacing={1} className="card card-middle">
      <Grid container xs={12} alignItems="center">
        <Grid item xs={3} sm={4} lg={3}>
          <div className="card-middle-icon-container">
            <Image
              src={icon?.url}
              alt={icon?.alternativeText}
              className="card-middle-icon"
              imgWrapperClass='card-middle-icon-wrapper'
            />
          </div>
        </Grid>
        <Grid item xs={9} sm={8} lg={9}>
          <Typography variant="h6" className="card-middle-title">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Markdown content={markdown} />
      </Grid>
    </Grid>
  );
}

export default CardMiddle;
