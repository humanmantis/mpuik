import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import BlockTitle from '../../components/shared/block-title/block-title';
import SyllabiTable from '../../components/syllabi-table/syllabi-table';
import Seo from '../../components/seo';
import { mapSeo } from '../../utils/map-seo';

function Syllabus({ data }) {
  const page = data.allStrapiPage.nodes[0];
  const internalSillabi = data.allStrapiSyllabus.nodes.filter(
    (syllabus) => syllabus.isinternal
  );
  const externalSillabi = data?.allStrapiSyllabus.nodes.filter(
    (syllabus) => !syllabus.isinternal
  );

  return (
    <Layout
      title={page.title}
      subtitle={page.subtitle}
      className="syllabi-page"
    >
      {!!internalSillabi?.length && (
        <>
          <BlockTitle title="Силабуси дисциплін кафедри" />
          <SyllabiTable syllabi={internalSillabi} />
        </>
      )}
      {!!externalSillabi?.length && (
        <>
          <BlockTitle title="Силабуси дисциплін для інших спеціальностей" />
          <SyllabiTable syllabi={externalSillabi} />
        </>
      )}
    </Layout>
  );
}

export default Syllabus;

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
  query GetSyllabiPage {
    allStrapiPage(filter: { slug: { eq: "syllabi" } }) {
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
    allStrapiSyllabus(sort: { order: DESC }) {
      nodes {
        id
        order
        discipline
        link
        year
        credits
        isinternal
        isexam
        altemployee
        altemployeelink
        employees {
          id
          slug
          fullname
        }
      }
    }
  }
`;
