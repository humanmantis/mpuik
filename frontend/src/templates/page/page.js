import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import constants from '../../config/constants';
import Link from '../../components/shared/link/link';
import Layout from '../../components/layout';
import CardBlock from '../../components/card-block/card-block';
import Gallery from '../../components/gallery/gallery';
import Article from '../../components/article/article';
import ListBlock from '../../components/list-block/list-block';
import ElectiveDisciplinesBlock from '../../components/elective-disciplines-block/elective-disciplines-block';
import Location from '../../components/location/location';
import ProgramCard from '../../components/program-card/program-card';
import './page.scss';
import Seo from '../../components/seo';
import { mapSeo } from '../../utils/map-seo';

function Page({ data }) {
  const { contentType } = constants;
  const page = data?.allStrapiPage.nodes[0];

  function renderComponent(item) {
    switch (item.strapi_component) {
      case contentType.article:
        return <Article key={item.title} {...item} />;
      case contentType.cardBlock:
        return <CardBlock key={item.title} {...item} />;
      case contentType.gallery:
        return (
          <Gallery
            key={item.title}
            variant={item.type}
            gallery={item.photos}
            {...item}
          />
        );
      case contentType.link:
        return (
          <Typography
            variant="h5"
            component="span"
            align="center"
            className="page-link-title"
            paragraph
          >
            <Link key={item.title} title={item.title} to={item.link}>
              {item.title}
            </Link>
          </Typography>
        );
      case contentType.list:
        return <ListBlock key={item.title} {...item} />;
      case contentType.electiveDisciplines:
        return <ElectiveDisciplinesBlock key={item.title} {...item} />;
      default:
        return <></>;
    }
  }

  return (
    <Layout title={page?.title} subtitle={page?.subtitle}>
      {page?.content?.length > 0 &&
        page.content.map((item) => renderComponent(item))}

      {!!page?.programs?.length && (
        <Grid container spacing={3} justifyContent="center">
          {page.programs.map((program) => (
            <Grid item xs={12} md={6} lg={4} key={program.slug}>
              <ProgramCard {...program} />
            </Grid>
          ))}
        </Grid>
      )}

      {page?.location && <Location {...page.location} />}
    </Layout>
  );
}

export default Page;

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
  query GetPage($slug: String!) {
    allStrapiPage(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        slug
        title
        subtitle
        content {
          ... on STRAPI__COMPONENT_LIST_LINK {
            id
            strapi_component
            title
            link
          }
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
          ... on STRAPI__COMPONENT_PAGE_CARD_BLOCK {
            id
            strapi_component
            title
            subtitle
            variant
            cards {
              id
              title
              description {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              icon {
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
          ... on STRAPI__COMPONENT_PAGE_ELECTIVE_DISCIPLINES_CARD_BLOCK {
            id
            strapi_component
            title
            subtitle
            semesters {
              id
              semester
              form
              silabusis {
                id
                discipline
                link
                isexam
                credits
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
          ... on STRAPI__COMPONENT_PAGE_LIST_BLOCK {
            id
            strapi_component
            title
            subtitle
            list {
              id
              title
              link
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
        programs {
          id
          slug
          name
          level
          form
          specialization
          term
          program
          cards {
            ... on STRAPI__COMPONENT_PAGE_ARTICLE {
              id
              title
            }
            ... on STRAPI__COMPONENT_PAGE_CARD_BLOCK {
              id
              title
            }
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
