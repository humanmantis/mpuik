import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import SchoolOutlined from '@mui/icons-material/SchoolOutlined';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Obfuscate from 'react-obfuscate';

import PageWaves from '../../../components/shared/background/page-waves/page-waves';
import Link from '../../../components/shared/link/link';
import Markdown from '../../../components/markdown/markdown';
import './employee.scss';
import Image from '../../../components/image/image';
import Seo from '../../../components/seo';
import { mapSeo } from '../../../utils/map-seo';

function Employee({ data }) {
  const employee = data?.allStrapiEmployee.nodes[0];

  return (
    <>
      <PageWaves />
      <Container className="main-container employee-page" fixed>
        <Paper component="section" className="content">
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} md={8} lg={7} className="employee-page-details">
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                className="employee-page-title"
              >
                {employee.fullname}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                paragraph
                className="employee-page-subtitle"
              >
                {employee.position}
              </Typography>
              {employee.academiclevel && (
                <Typography variant="subtitle1" paragraph className="mb-0">
                  <b>Науковий ступінь:</b> {employee.academiclevel}
                </Typography>
              )}
              {employee.academicstatus && (
                <Typography variant="subtitle1" paragraph className="mb-0">
                  <b>Вчене звання:</b> {employee.academicstatus}
                </Typography>
              )}
              {employee.interests && (
                <Typography variant="subtitle1" paragraph>
                  <b>Область наукових інтересів:</b> {employee.interests}
                </Typography>
              )}
              {employee.sefleducation && (
                <Typography variant="subtitle1" paragraph className="mb-0 mt-1">
                  <b>
                    <Link to={employee.sefleducation} target="_blank">
                      Стажування, підвищення кваліфікації, самоосвіта
                    </Link>
                  </b>
                </Typography>
              )}
              {employee.awards && (
                <Typography variant="subtitle1" paragraph className="mb-0">
                  <b>
                    <Link to={employee.awards} target="_blank">
                      Відзнаки, подяки
                    </Link>
                  </b>
                </Typography>
              )}

              {!!employee.syllabi?.length && (
                <>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className="mb-0 mt-1"
                  >
                    <b>Дисципліни, які викладає:</b>
                  </Typography>
                  <ol className="employee-page-disciplines-list">
                    {employee.syllabi.map((syllabus) => (
                      <Typography
                        key={syllabus.discipline}
                        variant="body1"
                        align="justify"
                        component="li"
                      >
                        {syllabus.link ? (
                          <Link to={syllabus.link}>{syllabus.discipline}</Link>
                        ) : (
                          syllabus.discipline
                        )}{' '}
                        {syllabus.year && `(${syllabus.year} курс)`}
                      </Typography>
                    ))}
                  </ol>
                </>
              )}

              {!!employee.bio && (
                <Markdown
                  content={employee.bio.data.childMarkdownRemark.html}
                />
              )}
              {!!employee.publications?.length && (
                <>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className="employee-page-title"
                  >
                    Публікації
                  </Typography>
                  <ol className="employee-page-publications-list">
                    {employee.publications.map((p) => (
                      <Typography
                        key={p.id}
                        variant="body1"
                        align="justify"
                        component="li"
                      >
                        {p.link ? <Link to={p.link}>{p.title}</Link> : p.title}
                      </Typography>
                    ))}
                  </ol>
                </>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              className="employee-page-photo-container"
            >
              {employee.photo ? (
                <Image
                  src={employee.photo.url}
                  localFile={employee.photo.localFile}
                  alt={employee.fullname}
                  quality={100}
                  loading="eager"
                  objectFit="contain"
                  className="employee-page-image"
                  modal
                />
              ) : (
                <StaticImage
                  src="../../../../static/images/default-profile.jpg"
                  alt={employee.fullname}
                  className="employee-page-image"
                />
              )}
              {employee.email && (
                <div className="employee-page-subitem">
                  <div className="employee-page-icon-container">
                    <EmailOutlined className="icon" />
                  </div>
                  <Typography variant="body1">
                    <Obfuscate
                      to={`mailto:${employee.email}`}
                      element={Link}
                      className="employee-page-link"
                    >
                      {employee.email}
                    </Obfuscate>
                  </Typography>
                </div>
              )}
              {employee.googleScholarLink && (
                <div className="employee-page-subitem">
                  <div className="employee-page-icon-container">
                    <SchoolOutlined className="icon" />
                  </div>
                  <Typography
                    variant="body1"
                    className="employee-page-link"
                    component={Link}
                    href={employee.googleScholarLink}
                  >
                    Google Scholar
                  </Typography>
                </div>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Employee;

export const Head = ({ data, location }) => {
  const employee = data.allStrapiEmployee?.nodes[0];
  const description = `${employee?.fullname} - ${employee?.position}. ${
    employee?.bio?.data?.bio?.slice(0, 50) + '...'
  }`;
  return (
    <Seo
      pageSeo={mapSeo(data.allStrapiEmployee?.nodes[0]?.seo, {
        title: employee?.fullname,
        description,
      })}
      location={location}
    />
  );
};

export const query = graphql`
  query GetEmployee($slug: String!) {
    allStrapiEmployee(filter: { slug: { eq: $slug } }) {
      nodes {
        fullname
        academiclevel
        academicstatus
        position
        sefleducation
        interests
        slug
        email
        photo {
          url
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        bio {
          data {
            bio
            childMarkdownRemark {
              html
            }
          }
        }
        googleScholarLink
        syllabi {
          discipline
          link
          year
        }
        publications {
          id
          link
          title
        }
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
  }
`;
