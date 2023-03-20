import React from 'react';
import { graphql } from 'gatsby';
import EduScienceTable from '../../components/edu-science-table/edu-science-table';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { mapSeo } from '../../utils/map-seo';

function EduSciencePage({ data }) {
  const page = data.allStrapiPage.nodes[0];
  const eduSciencePrograms = data.allStrapiEduScienceProgram.nodes?.sort(
    (a, b) => b.order - a.order
  );
  return (
    <Layout title={page.title} subtitle={page.subtitle}>
      {!!eduSciencePrograms?.length && (
        <EduScienceTable programs={eduSciencePrograms} />
      )}
    </Layout>
  );
}

export default EduSciencePage;

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
  query GetEduSciencePage {
    allStrapiPage(filter: { slug: { eq: "educational-scientific-programs" } }) {
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
    allStrapiEduScienceProgram(sort: { order: DESC }) {
      nodes {
        order
        program
        programlink
        reviews {
          title
          link
        }
        feedbacks {
          title
          link
        }
      }
    }
  }
`;
