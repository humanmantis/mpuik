import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { StaticImage } from 'gatsby-plugin-image';
import constants from '../../../config/constants';
import PageWaves from '../../../components/shared/background/page-waves/page-waves';
import Link from '../../../components/shared/link/link';
import Gallery from '../../../components/gallery/gallery';
import CardBlock from '../../../components/card-block/card-block';
import ArticleSmall from '../../../components/article-small/article-small';
import Location from '../../../components/location/location';
import './program.scss';
import Seo from '../../../components/seo';
import { mapSeo } from '../../../utils/map-seo';

function Program({ data, location }) {
  const { galleryType } = constants;

  const program = data?.allStrapiProgram.nodes[0];

  useEffect(() => {
    if (program && location.hash) {
      document
        .querySelector(decodeURI(location.hash))
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [data, location.hash]);

  return (
    <>
      <PageWaves />
      <Container className="main-container page-program" fixed>
        <Grid container justifyContent="space-between" spacing={3}>
          <Grid item xs={12} md={6} lg={5} className="page-program-text-block">
            <StaticImage
              src="../../../../static/icons/circles.svg"
              alt="circles"
              className="page-program-circles"
            />
            <Typography
              variant="h3"
              className="page-program-title"
              gutterBottom
            >
              {program.name}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              fontWeight="normal"
              paragraph
            >
              Освітній рівень:{' '}
              <span fontWeight="bold">
                {program.level} {program.form && `(${program.form})`}
              </span>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              fontWeight="normal"
              paragraph
            >
              Освітня програма:{' '}
              <span fontWeight="bold">{program.specialization}</span>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              fontWeight="normal"
              paragraph
            >
              Термін навчання: <span fontWeight="bold">{program.term}</span>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              fontWeight="normal"
              paragraph
            >
              Вартість навчання:{' '}
              <span fontWeight="bold">{program.price} грн / рік</span>
            </Typography>
            <Typography variant="h6" component="p" fontWeight="bold" paragraph>
              <Link to={program.program} target="_blank">
                Освітньо-професійна програма
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            {program?.photos?.length > 0 && (
              <Gallery
                gallery={program?.photos.map((item) => ({
                  ...item,
                  className: 'page-program-image',
                }))}
                variant={galleryType.slider}
              />
            )}
          </Grid>
        </Grid>
        {program.cards?.map((card) =>
          card.cards ? (
            <CardBlock key={card.id} {...card} />
          ) : (
            <ArticleSmall key={card.id} {...card} />
          )
        )}
      </Container>
      {program?.location && <Location {...program.location} />}
    </>
  );
}

export default Program;

export const Head = ({ data, location }) => {
  const program = data?.allStrapiProgram.nodes[0];
  const title = `${program.level} - ${program.name} ${program.form ? `(${program.form})` : ''}`;
  return (
    <Seo
      pageSeo={mapSeo(data.allStrapiProgram?.nodes[0]?.seo, {
        title,
        description: title + ' - ' + program.specialization + ' - ' + program.term + ' - ' + program.price + ' грн / рік',
      })}
      location={location}
    />
  );
};

export const query = graphql`
  query GetProgram($slug: String!) {
    allStrapiProgram(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        name
        level
        form
        specialization
        term
        price
        program
        photos {
          url
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        cards {
          ... on STRAPI__COMPONENT_PAGE_ARTICLE {
            id
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
              url
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on STRAPI__COMPONENT_PAGE_CARD_BLOCK {
            id
            title
            subtitle
            variant
            cards {
              title
              description {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              icon {
                url
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
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
