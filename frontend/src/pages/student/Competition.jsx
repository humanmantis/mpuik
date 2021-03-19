import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Container } from '@material-ui/core';
import Article from '../../components/Article/Article';
import Gallery from '../../components/Gallery/Gallery';
import PageWaves from '../../components/background/PageWaves';

const GetCompetitionPage = loader(
  '../../graphql/pages/student/GetCompetitionPage.gql'
);

function Cooperation() {
  const { loading, error, data } = useQuery(GetCompetitionPage);
  const article = data?.competition?.article;
  const gallery = data?.competition?.gallery;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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

export default Cooperation;
