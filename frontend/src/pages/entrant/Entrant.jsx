import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../components/common/PageTitle";
import PageWaves from "../../components/background/PageWaves";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import Location from "../../components/Location/Location";
import Loader from "../../components/common/Loader";

const GetEntrantPage = loader("../../graphql/pages/entrant/GetEntrantPage.gql");

function Entrant() {
  const { loading, error, data } = useQuery(GetEntrantPage);
  const entrant = data?.page.data?.attributes;
  const programs = entrant?.programs.data;
  const location = entrant?.location.data?.attributes;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <PageWaves />
      <Container
        className="main-container"
        style={{ marginBottom: "3rem" }}
        component="section"
        fixed
      >
        <PageTitle title={entrant.title} subtitle={entrant.subtitle} />
        <Grid container spacing={3} justify="center">
          {!!programs.length &&
            programs.map((p) => (
              <Grid item xs={12} md={6} lg={4} key={p.attributes.slug}>
                <ProgramCard
                  slug={p.attributes.slug}
                  name={p.attributes.name}
                  form={p.attributes.form}
                  level={p.attributes.level}
                  specialization={p.attributes.specialization}
                  term={p.attributes.term}
                  program={p.attributes.program}
                  links={p.attributes.cards}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
      {location && (
        <Location
          title={location.title}
          list={location.list}
          address={location.address}
          phone={location.phone}
          email={location.email}
          latitude={location.latitude}
          longitude={location.longitude}
        />
      )}
    </>
  );
}

export default Entrant;
