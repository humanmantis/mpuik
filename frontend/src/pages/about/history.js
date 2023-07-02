import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { graphql } from 'gatsby';
import Gallery from '../../components/gallery/gallery';
import Image from '../../components/image/image';
import Location from '../../components/location/location';
import Markdown from '../../components/markdown/markdown';
import PageWaves from '../../components/shared/background/page-waves/page-waves';
import PageTitle from '../../components/shared/page-title/page-title';
import constants from '../../config/constants';
import './history.scss';
import Seo from '../../components/seo';
import { mapSeo } from '../../utils/map-seo';

function History({ data }) {
  const { contentType } = constants;

  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  const history = data.allStrapiPage.nodes[0];
  const article = history?.content?.find(
    (content) => content.strapi_component === contentType.article
  );
  const gallery = history?.content?.find(
    (content) => content.strapi_component === contentType.gallery
  );

  return (
    <>
      <PageWaves />
      <Container className="history-page" fixed>
        <Grid
          container
          component="section"
          alignContent="center"
          justifyContent="center"
        >
          <PageTitle title={history.title} subtitle={history.subtitle} />
          <Grid item xs={12}>
            <Paper component="article" className="history-content">
              <Collapse
                in={checked}
                collapsedSize={400}
                classes={{
                  root: 'history-container-collapse',
                  entered: 'history-container-entered',
                }}
              >
                <Markdown
                  content={article?.content.data.childMarkdownRemark.html}
                />
              </Collapse>
              <Button
                onClick={handleChange}
                endIcon={checked ? <ExpandLess /> : <ExpandMore />}
                className="history-button"
              >
                Показати {checked ? 'менше' : 'більше'}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {article?.photos?.length > 0 && (
        <div className="history-main-image-container">
          <Image
            src={article?.photos[0].url}
            alt={article?.photos[0].alternativeText}
            localFile={article?.photos[0].localFile}
            quality={80}
            objectFit="cover"
            imgWrapperClass="history-main-image-wrapper"
            imgClassName="history-main-image"
          />
        </div>
      )}

      {gallery && (
        <Gallery
          title={gallery.title}
          subtitle={gallery.subtitle}
          type={gallery.type}
          gallery={gallery.photos}
        />
      )}

      {history?.location && (
        <Location {...history.location} className="location-mt5" />
      )}
    </>
  );
}

export default History;

export const Head = ({ data, location }) => {
  return (
    <Seo
      pageSeo={mapSeo(data.allStrapiPage?.nodes[0]?.seo, {
        title: data.allStrapiPage?.nodes[0]?.title,
        description: data.allStrapiPage?.nodes[0]?.subtitle,
      })}
      location={location}
    />
  );
};

export const query = graphql`
  query GetHistoryPage {
    allStrapiPage(filter: { slug: { eq: "history" } }) {
      nodes {
        title
        subtitle
        content {
          ... on STRAPI__COMPONENT_PAGE_ARTICLE {
            id
            strapi_component
            title
            subtitle
            content {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            photos {
              alternativeText
              id
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }

          ... on STRAPI__COMPONENT_PAGE_GALLERY {
            id
            strapi_component
            type
            title
            subtitle
            photos {
              id
              alternativeText
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        location {
          id
          title
          address
          phone
          email
          longitude
          latitude
          social {
            facebook
            instagram
            telegram
            twitter
            youtube
          }
          list {
            id
            link
            title
          }
        }
        seo {
          title: metaTitle
          description: metaDescription
          keywords
          robots: metaRobots
          canonical: canonicalURL
          image: metaImage {
            localFile {
              publicURL
            }
          }
          social: metaSocial {
            socialNetwork
            title
            description
            image {
              localFile {
                publicURL
              }
            }
          }
          structuredData {
            internal {
              content
            }
          }
        }
      }
    }
  }
`;
