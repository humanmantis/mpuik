import Container from '@mui/material/Container';
import React from 'react';
import PageWaves from './shared/background/page-waves/page-waves';
import PageTitle from './shared/page-title/page-title';

const Layout = ({ children, title, subtitle, className }) => {
  return (
    <>
      <PageWaves />
      <Container className={`main-container ${className}`} fixed>
        <PageTitle title={title} subtitle={subtitle} />
        {children}
      </Container>
    </>
  );
};

export default Layout;
