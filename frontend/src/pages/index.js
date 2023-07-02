import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import { graphql } from 'gatsby';
import IndexWaves from '../components/shared/background/index-waves/index-waves';
import Link from '../components/shared/link/link';
import Image from '../components/image/image';
import './index.scss';
import Seo from '../components/seo';
import { mapSeo } from '../utils/map-seo';

const IndexPage = ({ data }) => {
  const home = data.strapiHome;
  return (
    <Container className="index-container" fixed>
      <Grid container component="section">
        <Grid item xs={12} sm={8} md={6} lg={5} className="container">
          <div className="parent-logos">
            <Link
              to={home?.university?.link}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={home?.universityLogo?.url}
                localFile={home?.universityLogo?.localFile}
                alt={
                  home?.university?.title ||
                  home?.universityLogo?.alternativeText
                }
                quality="100"
                className="university-logo"
                objectFit="contain"
              />
            </Link>
            <div className="divider" />

            <Link
              to={home?.institute?.link}
              target="_blank"
              className="institute-link"
              underline="hover"
            >
              <Image
                src={home.instituteLogo?.url}
                localFile={home.instituteLogo?.localFile}
                alt={
                  home?.institute?.title ||
                  home?.instituteLogo?.alternativeTesxt
                }
                className="institute-logo cursor-pointer"
                layout="fixed"
                objectFit="contain"
              />
              <Typography
                variant="body1"
                className="institute-name"
                align="center"
              >
                {home?.institute?.title}
              </Typography>
            </Link>
          </div>
          <img src="/icons/circles.svg" alt="circles" className="circles" />
          <Typography variant="h2" className="title" gutterBottom>
            {home?.title?.split(' ').map((word) => (
              <span key={word} className="word">
                {word + ' '}
              </span>
            ))}
          </Typography>
          <Typography variant="subtitle1" paragraph className="subtitle">
            {home?.subtitle}
          </Typography>
          <Button
            component={Link}
            to={home?.button?.link}
            endIcon={<ArrowRightAlt />}
            variant="outlined"
            size="large"
            color="primary"
            style={{ borderRadius: '0.875rem', padding: '0.5rem 2rem' }}
          >
            {home?.button?.title}
          </Button>
          <Typography variant="subtitle1" className="partnership" gutterBottom>
            {home?.partnershipText}
          </Typography>
          <Grid
            container
            alignItems="center"
            className="partnership-icons"
            spacing={5}
          >
            {home?.partnershipIcons?.map((icon) => (
              <Grid item key={icon.alternativeText} xs={4}>
                <Image
                  src={icon.url}
                  localFile={icon.localFile}
                  alt={icon.alternativeText}
                  className="partnership-icon"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item lg={1} />

        <Grid item xs={12} md={6} lg={6} className="container">
          <div className="main-media">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${home.videoLink
                .split('/')
                .pop()}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <img src="/icons/waves.svg" alt="waves" className="waves" />
          <Typography variant="h5" className="title" align="center">
            Спеціальність:
          </Typography>
          <Typography
            variant="h4"
            className="highlighted-words"
            gutterBottom
            align="center"
          >
            {home?.speciality}
          </Typography>
          <Typography variant="h5" className="title" align="center">
            Освітня програма:
          </Typography>
          <Typography
            variant="h5"
            className="highlighted-words"
            gutterBottom
            align="center"
          >
            {home?.specialization}
          </Typography>
        </Grid>
      </Grid>
      <IndexWaves />
    </Container>
  );
};

export default IndexPage;

export const Head = ({ data, location }) => {
  return (
    <Seo
      pageSeo={mapSeo(data.strapiHome.seo, { title: data.strapiHome.title })}
      location={location}
    />
  );
};

export const query = graphql`
  query GetHome {
    strapiHome {
      title
      subtitle
      videoLink
      button {
        link
        title
      }
      partnershipText
      partnershipIcons {
        alternativeText
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      speciality
      specialization
      university {
        title
        link
      }
      universityLogo {
        alternativeText
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      institute {
        link
        title
      }
      instituteLogo {
        alternativeText
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
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
`;
