import React from 'react';
import { Container } from '@material-ui/core';

import TopWaves from '../../components/background/PageWaves';
import PageTitle from './PageTitle';

const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <TopWaves />
      <Container className="main-container" fixed>
        <PageTitle title={title} subtitle={subtitle} />
        {children}
      </Container>
    </>
  );
};

export default Layout;
