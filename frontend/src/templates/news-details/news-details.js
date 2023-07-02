import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Markdown from '../../components/markdown/markdown';
import Image from '../../components/image/image';
import NewsCard from '../../components/news-card/news-card';
import './news-details.scss';
import Seo from '../../components/seo';
import { mapSeo } from '../../utils/map-seo';

const NewsDetails = ({ data }) => {
  const relatedPosts = data?.relatedPosts.nodes;
  const post = data?.allStrapiPost.nodes[0];

  return (
    <Container fixed className="news-detail-page">
      <section className="news-detail-section">
        {post?.photo ? (
          <Image
            src={post.photo.url}
            alt={post.title}
            localFile={post.photo.localFile}
            className="news-detail-image"
          />
        ) : (
          <StaticImage
            src="../../../static/images/default-post.jpg"
            alt={post.title}
            quality={80}
            className="news-detail-image"
          />
        )}
        <Typography variant="h3" className="news-detail-title" gutterBottom>
          {post.title}
        </Typography>
        <Markdown content={post.content.data.childMarkdownRemark.html} />
      </section>
      {!!relatedPosts.length && (
        <>
          <Typography variant="h5" className="news-details-relates-news-title">
            Читайте також
          </Typography>
          <Grid container spacing={3} justifyContent="center" marginBottom={3}>
            {relatedPosts.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={item.slug}>
                <NewsCard item={item} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default NewsDetails;

export const Head = ({ data, location }) => {
  return (
    <Seo
      pageSeo={mapSeo(data.allStrapiPost?.nodes[0]?.seo, {
        title: data.allStrapiPost?.nodes[0]?.title,
        description: data.allStrapiPost?.nodes[0]?.description?.slice(0, 150) + '...',
      })}
      location={location}
    />
  );
};

export const query = graphql`
  query GetNewsDetails($slug: String!) {
    allStrapiPost(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        title
        description
        slug
        content {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        category {
          name
          slug
        }
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
          url
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

    relatedPosts: allStrapiPost(
      filter: { slug: { ne: $slug } }
      limit: 3
      sort: { createdAt: DESC }
    ) {
      nodes {
        id
        title
        description
        slug
        category {
          name
          slug
        }
        photo {
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
`;
