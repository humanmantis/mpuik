import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import Footer from './footer/footer';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './header/header';
import ScrollTop from './shared/back-to-top/scroll-top';
import BackToTop from './shared/back-to-top/back-to-top';

export default function TopLayout({ children, theme, location }) {
  const { allStrapiFooter, allStrapiMenus } = useStaticQuery(
    graphql`
      query GetHeaderAndFooter {
        allStrapiFooter {
          nodes {
            additionalText
            sections {
              id
              title
              links {
                id
                title
                link
              }
            }
            location {
              title
              address
              phone
              email
              social {
                facebook
                instagram
                twitter
                telegram
                youtube
              }
            }
          }
        }

        allStrapiMenus {
          nodes {
            attributes {
              title
              order
              url
              target
              children {
                data {
                  id
                  attributes {
                    url
                    title
                    target
                    order
                    children {
                      data {
                        attributes {
                          title
                          order
                          url
                        }
                        id
                      }
                    }
                  }
                }
              }
            }
            id
          }
        }
      }
    `
  );

  const footer = allStrapiFooter.nodes[0];
  const header = allStrapiMenus.nodes;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <ScrollTop />
          <Header navigation={header} location={location} />
          {children}
          <BackToTop />
          <Footer {...footer} />
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
}
