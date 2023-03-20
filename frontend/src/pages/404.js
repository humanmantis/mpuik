import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '../components/shared/link/link';
import PageWaves from '../components/shared/background/page-waves/page-waves';
import './404.scss'
import { navigate } from 'gatsby';

function PageNotFound({location}) {
  useEffect(() => {
    const pagesToRedirect = ['/news', '/news/no-category'];
    if (pagesToRedirect.includes(location.pathname)) {
      navigate('/news/page')
    }
  }, []);

  return (
    <>
      <PageWaves />
      <Container fixed className="main-container not-found">
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6}>
            <img
              src="/icons/page-not-found.svg"
              alt="Сторінку не знайдено"
              className="img"
            />
          </Grid>
          <Grid item md={6} className="text-container">
            <Typography variant="h2" className="title">
              Сторінку не знайдено
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/"
              className="button"
            >
              На головну
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PageNotFound;
