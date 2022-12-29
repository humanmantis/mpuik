import { React, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import AppRouter from './AppRouter';
import ErrorBoundary from './components/error/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';
import Header from './components/Header/Header';
import Loader from './components/common/Loader';
import Footer from './components/Footer';

const GetSkeleton = loader('./graphql/GetSkeleton.gql');

function App() {
  const { loading, error, data } = useQuery(GetSkeleton);
  const [navLoading, setNavLoading] = useState(false);
  const [navData, setNavData] = useState([]);
  const [navError, setNavError] = useState(null);

  useEffect(() => {
    setNavLoading(true);
    fetch(`${process.env.REACT_APP_REST_API_URI}/menus?nested`)
      .then((res) => res.json())
      .then((data) => setNavData(data))
      .catch((err) => setNavError(err))
      .finally(() => setNavLoading(false));
  }, []);

  if (loading || navLoading) return <Loader />;
  if (error || navError) return <AppRouter />;

  return (
    <ErrorBoundary>
      <ScrollToTop />
      {navData?.menus?.length && <Header navigation={navData.menus[0].items} />}
      <AppRouter />
      <BackToTop />
      {data?.footer && <Footer footer={data.footer} />}
    </ErrorBoundary>
  );
}

export default App;
