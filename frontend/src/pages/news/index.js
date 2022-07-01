import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Container, makeStyles } from '@material-ui/core';
import Pagination from '../../components/Pagination';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import constants from '../../config/constants';
import Loader from '../../components/common/Loader';
import NewsCarousel from '../../components/NewsCarousel/NewsCarousel';
import PageTitle from '../../components/common/PageTitle';
import PageWaves from '../../components/background/PageWaves';

const GetNewsPage = loader('../../graphql/pages/news/GetNewsPage.gql');
const GetLatestNews = loader('../../graphql/pages/news/GetLatestNews.gql');
const GetNewsByCategory = loader('../../graphql/pages/news/GetNewsByCategory.gql');

const useStyles = makeStyles(() => ({
  loadingContainer: {
    marginTop: '3rem',
    height: '500px'
  }
}));

function News({ search, params }) {
  const classes = useStyles();
  const currentPage = new URLSearchParams(search).get('page') ?? 1;

  const { loading, error, data } = useQuery(GetNewsPage);

  const {
    loading: newsLoading,
    error: newsError,
    data: newsData
  } = useQuery(params.category ? GetNewsByCategory : GetLatestNews, {
    variables: {
      start: (currentPage - 1) * constants.itemsPerPage,
      limit: constants.itemsPerPage,
      category: params.category
    }
  });

  const article = data?.page.data?.attributes;
  const pinnedPosts = data?.pinnedPosts.data;
  const posts = newsData?.posts.data;
  const count = newsData?.posts?.meta?.pagination?.total;

  if (loading) return <Loader />;
  if (newsError || (posts?.length === 0 && !params.category)) return <Redirect to="/news" />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <PageWaves />
      <Container fixed className="main-container">
        <PageTitle title={article.title} subtitle={article.subtitle} />
      </Container>
      {pinnedPosts?.length && <NewsCarousel items={pinnedPosts} />}
      <Container fixed className="main-container">
        {newsLoading ? (
          <div className={classes.loadingContainer}>
            <Loader />
          </div>
        ) : (
          !!posts?.length && (
            <>
              <NewsContainer
                title={
                  params.category
                    ? `Новини за категорією ${posts[0]?.attributes.category?.data?.attributes.name}`
                    : 'Останні новини'
                }
                items={posts}
              />
              <Pagination
                totalItems={count}
                currentPage={+currentPage}
                itemsPerPage={constants.itemsPerPage}
              />
            </>
          )
        )}
      </Container>
    </>
  );
}

export default News;
