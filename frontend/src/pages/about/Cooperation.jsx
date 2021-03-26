import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Container } from '@material-ui/core';
import Article from '../../components/Article/Article';
import Gallery from '../../components/Gallery/Gallery';
import PageWaves from '../../components/background/PageWaves';
import Loader from '../../components/common/Loader';

const GetCooperationPage = loader(
  '../../graphql/pages/about/GetCooperationPage.gql'
);

function Conference() {
  const { loading, error, data } = useQuery(GetCooperationPage);
  const article = data?.internationalCooperation?.article;
  const gallery = data?.internationalCooperation?.gallery;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <PageWaves />
      <Container
        className="main-container"
        style={{ marginBottom: '3rem' }}
        fixed
      >
        <Article {...article} />
        {gallery?.photos.length > 0 && (
          <Gallery
            title={gallery.title}
            subtitle={gallery.subtitle}
            gallery={gallery.photos}
          />
        )}
      </Container>
    </>
  );
}

export default Conference;
