import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import AppRouter from './AppRouter';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';
import Header from './components/Header/Header';

const GetNav = loader('./graphql/getNav.graphql');

function App() {
  const { loading, error, data } = useQuery(GetNav);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <ScrollToTop />
      <Header navigation={data.navigations} />
      <AppRouter />
      <BackToTop />
    </>
  );
}

export default App;
