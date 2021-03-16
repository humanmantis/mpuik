import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Container, Grid } from '@material-ui/core';
import PageTitle from '../../components/common/PageTitle';
import TopWaves from '../../components/background/PageWaves';
import TeacherCard from '../../components/TeacherCard/TeacherCard';

const GetStaffPage = loader('../../graphql/pages/about/GetStaffPage.gql');

function Teachers() {
  const { loading, error, data } = useQuery(GetStaffPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
          title={data.teacher.title}
          subtitle={data.teacher.subtitle}
        />

        <Grid container spacing={3} justify="center">
          {data?.employees.map((emp) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={emp.id}>
              <TeacherCard
                route={`/about/staff/${emp.slug}`}
                fullname={emp.fullname}
                position={emp.position}
                photo={emp.photo}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Teachers;
