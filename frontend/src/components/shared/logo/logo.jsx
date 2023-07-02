import React from 'react';
import { Link } from 'gatsby';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './logo.scss';

function Logo({ mobileStyle }) {
  return (
    <Grid container alignItems="center" spacing={1} className={mobileStyle}>
      <Grid item>
        <Link to="/">
          <img
            src='/images/logo.svg'
            alt="МПУіК"
            width={56}
            height={56}
          />
        </Link>
      </Grid>
      <Grid item>
        <Link to="/" className="logo-link">
          <Typography variant="subtitle1" className="logo-title">
            МПУіК
          </Typography>
          <Typography variant="subtitle2" className="logo-subtitle">
            Сторінка Кафедри
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Logo;
