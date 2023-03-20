import React from 'react';
import Typography from '@mui/material/Typography';
import './block-title.scss';

function BlockTitle({ title, subtitle }) {
  return (
    <div className="page-block-title">
      {title && (
        <Typography
          variant="h4"
          className="block-title"
          align="center"
          gutterBottom
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          className="block-subtitle"
          paragraph
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
}

export default BlockTitle;
