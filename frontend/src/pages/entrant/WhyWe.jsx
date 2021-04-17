import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import CardBlock from '../../components/CardBlock/CardBlock';
import ArticleSmall from '../../components/Article/ArticleSmall';

import Loader from '../../components/common/Loader';
import Layout from '../../components/common/Layout';

const GetWhyWePage = loader('../../graphql/pages/entrant/GetWhyWePage.gql');

function WhyWe() {
  const { loading, error, data } = useQuery(GetWhyWePage);

  const whyWe = data?.whyWe;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <Layout title={whyWe.title} subtitle={whyWe.subtitle}>
      {whyWe.cards.map((card) =>
        card.cards ? (
          <CardBlock
            key={card.id}
            slug={card.slug}
            title={card.title}
            subtitle={card.subtitle}
            cards={card.cards}
          />
        ) : (
          <ArticleSmall
            key={card.id}
            slug={card.slug}
            title={card.title}
            subtitle={card.subtitle}
            content={card.content}
            photos={card.photos}
          />
        )
      )}
    </Layout>
  );
}

export default WhyWe;
