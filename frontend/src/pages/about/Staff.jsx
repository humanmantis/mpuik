import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Container, Grid } from '@material-ui/core';
import PageTitle from '../../components/common/PageTitle';
import TopWaves from '../../components/background/PageWaves';
import TeacherCard from '../../components/TeacherCard/TeacherCard';
import Loader from '../../components/common/Loader';

const GetStaffPage = loader('../../graphql/pages/about/GetStaffPage.gql');

function Teachers() {
  const { loading, error, data } = useQuery(GetStaffPage);

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <TopWaves />
      <Container
        className="main-container"
        style={{ marginBottom: '3rem' }}
        fixed
        component="section"
      >
        <PageTitle
          title={data.page.data.attributes.title}
          subtitle={data.page.data.attributes.subtitle}
        />

        <Grid container spacing={3} justify="center">
          {data?.employees?.data?.map((emp) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={emp.attributes.slug}>
              <TeacherCard
                route={`/about/staff/${emp.attributes.slug}`}
                fullname={emp.attributes.fullname}
                position={emp.attributes.position}
                academiclevel={emp.attributes.academiclevel}
                photo={emp.attributes.photo.data?.attributes}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Teachers;
