import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import AppRouter from "./AppRouter";
import ScrollToTop from "./components/common/ScrollToTop";
import BackToTop from "./components/BackToTop/BackToTop";
import Header from "./components/Header/Header";
import Loader from "./components/common/Loader";
import Footer from "./components/Footer";

const GetNav = loader("./graphql/GetNav.gql");

function App() {
  const { loading, error, data } = useQuery(GetNav);

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <ScrollToTop />
      <Header navigation={data.navigations} />
      <AppRouter />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
