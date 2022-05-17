import React from "react";
import { Container } from "@material-ui/core";

import PageWawes from "../../components/background/PageWaves";
import PageTitle from "./PageTitle";

const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <PageWawes />
      <Container className="main-container" fixed>
        <PageTitle title={title} subtitle={subtitle} />
        {children}
      </Container>
    </>
  );
};

export default Layout;
