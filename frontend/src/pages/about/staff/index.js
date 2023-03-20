import React from 'react';
import Grid from '@mui/material/Grid';
import { graphql } from 'gatsby';
import Layout from '../../../components/layout';
import TeacherCard from '../../../components/teacher-card/teacher-card';

function Staff({ data }) {
  const { title, subtitle } = data.allStrapiPage.nodes[0];
  const employees = data.allStrapiEmployee.nodes;
  return (
    <Layout title={title} subtitle={subtitle} className="staff">
      <Grid container spacing={{xs: 2, sm: 3 }} justifyContent="center">
        {employees
          ?.sort((a, b) => b.order - a.order)
          .map((emp) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              key={emp.slug}
            >
              <TeacherCard
                route={`/about/staff/${emp.slug}`}
                fullname={emp.fullname}
                position={emp.position}
                academiclevel={emp.academiclevel}
                photo={emp.photo}
              />
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
}

export default Staff;

export const query = graphql`
  query GetStaff {
    allStrapiPage(filter: { slug: { eq: "staff" } }) {
      nodes {
        title
        subtitle
      }
    }
    allStrapiEmployee {
      nodes {
        id
        slug
        order
        fullname
        position
        academiclevel
        photo {
          url
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
