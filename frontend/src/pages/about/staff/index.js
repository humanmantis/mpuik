import React from 'react';
import Grid from '@mui/material/Grid';
import { graphql } from 'gatsby';
import Layout from '../../../components/layout';
import TeacherCard from '../../../components/teacher-card/teacher-card';
import Seo from '../../../components/seo';
import { mapSeo } from '../../../utils/map-seo';

function Staff({ data }) {
  const { title, subtitle } = data.allStrapiPage.nodes[0];
  const employees = data.allStrapiEmployee.nodes;
  return (
    <Layout title={title} subtitle={subtitle} className="staff">
      <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
        {employees
          ?.sort((a, b) => b.order - a.order)
          .map((emp) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={emp.slug}>
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

export const Head = ({ data, location }) => {
  return (
    <Seo
      pageSeo={mapSeo(data.allStrapiPage?.nodes[0]?.seo, {
        title: data.allStrapiPage?.nodes[0]?.title,
        description: data.allStrapiPage?.nodes[0]?.subtitle,
      })}
      location={location}
    />
  );
};

export const query = graphql`
  query GetStaff {
    allStrapiPage(filter: { slug: { eq: "staff" } }) {
      nodes {
        title
        subtitle
        seo {
          title: metaTitle
          description: metaDescription
          keywords
          robots: metaRobots
          canonical: canonicalURL
          image: metaImage {
            localFile {
              publicURL
            }
          }
          social: metaSocial {
            socialNetwork
            title
            description
            image {
              localFile {
                publicURL
              }
            }
          }
          structuredData {
            internal {
              content
            }
          }
        }
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
