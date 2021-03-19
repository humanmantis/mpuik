import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import AppRouter from './AppRouter';
import Header from './components/Header/Header';

const GetNav = loader('./graphql/getNav.graphql');

function App() {
  const { loading, error, data } = useQuery(GetNav);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Header navigation={data.navigations} />
      <AppRouter />
    </>
  );
}

export default App;
