import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { Container } from "@material-ui/core";
import Article from "../../components/Article/Article";
import Gallery from "../../components/Gallery/Gallery";
import PageWaves from "../../components/background/PageWaves";
import Loader from "../../components/common/Loader";

const GetScientificWorkPage = loader(
  "../../graphql/pages/about/GetScientificWorkPage.gql"
);

function ScientificWork() {
  const { loading, error, data } = useQuery(GetScientificWorkPage);
  const article = data?.scientificWork?.article;
  const gallery = data?.scientificWork?.gallery;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <PageWaves />
      <Container
        className="main-container"
        style={{ marginBottom: "3rem" }}
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

export default ScientificWork;
