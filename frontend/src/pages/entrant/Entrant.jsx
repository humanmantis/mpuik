import React from "react";
import { Redirect } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../components/common/PageTitle";
import PageWaves from "../../components/background/PageWaves";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import Location from "../../components/Location/Location";
import Loader from '../../components/common/Loader';

const GetEntrantPage = loader("../../graphql/pages/GetEntrantPage.gql");

function Entrant() {
  const { loading, error, data } = useQuery(GetEntrantPage);
  const entrant = data?.entrant;
  const programs = entrant?.programs;
  const location = entrant?.location;

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
          {programs.map((p) => (
            <Grid item xs={12} md={6} lg={4} key={p.id}>
              <ProgramCard
                slug={p.slug}
                name={p.name}
                form={p.form}
                level={p.level}
                specialization={p.specialization}
                term={p.term}
                program={p.program}
                links={p.cards}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Location
        title={location.title}
        list={location.list}
        address={location.address}
        phone={location.phone}
        email={location.email}
        latitude={location.latitude}
        longitude={location.longitude}
      />
    </>
  );
}

export default Entrant;
