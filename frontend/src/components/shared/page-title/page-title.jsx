import React from 'react';
import Typography from '@mui/material/Typography';
import './page-title.scss';



function PageTitle({ title, subtitle }) {
  return (
    <div className='page-head'>
      <Typography variant="h3" align="center" className='title' gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h6"
          align="center"
          component="p"
          className='subtitle'
          paragraph
        >
          {subtitle || ''}
        </Typography>
      )}
    </div>
  );
}

export default PageTitle;
