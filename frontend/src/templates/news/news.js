import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { graphql } from 'gatsby';
import PageWaves from '../../components/shared/background/page-waves/page-waves';
import PageTitle from '../../components/shared/page-title/page-title';
import NewsCarousel from '../../components/news-carousel/news-carousel';
import Pagination from '../../components/pagination/pagination';
import NewsCard from '../../components/news-card/news-card';
import './news.scss';
import Link from '../../components/shared/link/link';
import Seo from '../../components/seo';
import { mapSeo } from '../../utils/map-seo';

function News({ data, pageContext }) {
  const posts = data.allStrapiPost.nodes;
  const pinnedPosts = data.pinnedPosts.nodes;
  const article = data.allStrapiPage.nodes[0];
  const categories = data.allStrapiCategory.nodes?.filter(
    (item) => item.posts?.length
  );
  const isFirstPage = pageContext.humanPageNumber === 1;
  const hasCategory = pageContext.category;

  const pathPrefix = (item) => {
    if (hasCategory) {
      return `/news/${pageContext.category.slug}`;
    }
    return item.page === 1 ? '/news' : '/news/page';
  };

  return (
    <>
      <PageWaves />
      <Container fixed className="news-page">
        <PageTitle
          title={article.title}
          subtitle={
            isFirstPage
              ? article.subtitle
              : `Сторінка ${pageContext.humanPageNumber}`
          }
        />
      </Container>
      {!hasCategory && !!pinnedPosts?.length && isFirstPage && (
        <NewsCarousel items={pinnedPosts} />
      )}
      <Container
        fixed
        className={`news-page ${!isFirstPage || hasCategory ? 'mt-0' : ''}`}
      >
        {posts?.length > 0 && (
          <>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              marginBottom={3}
            >
              <Grid item xs={7} sm={8} md={9} lg={10}>
                <Typography
                  variant="h5"
                  className={`news-page-title ${
                    hasCategory ? 'news-page-category-title' : ''
                  }`}
                >
                  {!hasCategory && isFirstPage && 'Останні новини'}
                  {hasCategory && 'Категорія: '}
                  {hasCategory && <b>{pageContext.category.name}</b>}
                </Typography>
              </Grid>

              <Grid item xs={5} sm={4} md={3} lg={2}>
                <Select
                  value={pageContext.category?.slug || '/'}
                  fullWidth
                  className="news-page-select"
                >
                  <MenuItem value="/" component={Link} to="/news">
                    Всі новини
                  </MenuItem>
                  {categories.map((item) => (
                    <MenuItem
                      key={item.slug}
                      value={item.slug}
                      component={Link}
                      to={`/news/${item.slug || 'no-category'}`}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={3}
              justify="center"
              style={{ marginBottom: '3rem' }}
            >
              {posts.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={item.slug}>
                  <NewsCard item={item} />
                </Grid>
              ))}
            </Grid>
            <Pagination
              totlaPages={pageContext.numberOfPages}
              currentPage={pageContext.humanPageNumber}
              pathPrefix={pathPrefix}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default News;

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
  query GetNewsPage($skip: Int, $limit: Int, $categorySlug: String) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { order: DESC }
      filter: { category: { slug: { eq: $categorySlug } } }
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
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    pinnedPosts: allStrapiPost(
      sort: { order: DESC }
      filter: { pinned: { eq: true } }
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
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allStrapiPage(filter: { slug: { eq: "news" } }) {
      nodes {
        title
        subtitle
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
    allStrapiCategory {
      nodes {
        name
        slug
        posts {
          id
        }
      }
    }
  }
`;
