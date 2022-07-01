import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Redirect } from 'react-router-dom';

import Loader from '../components/common/Loader';
import Layout from '../components/common/Layout';
import constants from '../config/constants';
import CardBlock from '../components/CardBlock/CardBlock';
import Article from '../components/Article/Article';
import Gallery from '../components/Gallery/Gallery';
import PageLink from '../components/PageLink/PageLink';
import ListBlock from '../components/ListBlock/ListBlock';
import ElectiveDisciplinesBlock from '../components/ElectiveDisciplinesBlock/ElectiveDisciplinesBlock';

const GetPage = loader('../graphql/pages/GetPage.gql');

function Page({ params }) {
  const { loading, error, data } = useQuery(GetPage, {
    variables: { slug: params.subpath || params.path || params.slug }
  });

  const { contentType } = constants;
  const page = data?.pages.data[0]?.attributes;

  function renderComponent(item) {
    switch (item.__typename) {
      case contentType.article:
        return (
          <Article
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            photos={item.photos?.data}
          />
        );
      case contentType.cardBlock:
        return (
          <CardBlock
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            variant={item.variant}
            cards={item.cards}
          />
        );
      case contentType.gallery:
        return (
          <Gallery
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            cards={item.cards}
            type={item.type}
            gallery={item.photos?.data}
          />
        );
      case contentType.link:
        return <PageLink key={item.title} title={item.title} link={item.link} />;
      case contentType.list:
        return (
          <ListBlock
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            list={item.list}
          />
        );
      case contentType.electiveDisciplines:
        return (
          <ElectiveDisciplinesBlock
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            semesters={item.semesters}
          />
        );
      default:
        return <></>;
    }
  }

  if (loading) return <Loader />;
  if (!page) return <Redirect to="/404" />;
  if (error) return <Redirect to="/error" />;

  return (
    <Layout title={page.title} subtitle={page.subtitle}>
      {!!page.content.length && page.content.map((item) => renderComponent(item))}
    </Layout>
  );
}

export default Page;
