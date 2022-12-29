import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { makeStyles } from '@material-ui/core';
import { Container, Grid, Typography, Box, Link as MatLink } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ReactPlayer from 'react-player/lazy';
import ButtonLinkOutlined from '../components/common/ButtonLinkOutlined';
import IndexWaves from '../components/background/IndexWaves';
import circlesSvg from '../assets/icons/circles.svg';
import wavesSvg from '../assets/icons/waves.svg';
import Loader from '../components/common/Loader';

const GetIndex = loader('../graphql/pages/GetIndexPage.gql');

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative'
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },
  word: {
    '&:nth-child(4)': {
      color: theme.palette.info.main
    },
    '&:nth-child(5)': {
      color: theme.palette.info.main
    }
  },
  highlightedWords: {
    fontWeight: 'bold',
    color: theme.palette.info.main
  },
  subtitle: {
    marginBottom: '3rem'
  },
  partnership: {
    marginTop: '3rem'
  },
  partnerImage: {
    maxWidth: '100%',
    pointerEvents: 'none'
  },
  circles: {
    position: 'absolute',
    zIndex: -5,
    top: '90px',
    left: '-40px'
  },
  mainMedia: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
    borderRadius: '1rem',
    boxShadow: '0px 14px 36px rgba(0, 0, 0, 0.04)',
    backgroundColor: theme.palette.grey[300],
    marginBottom: '2rem',
    [theme.breakpoints.only('xs')]: {
      height: '200px'
    },
    [theme.breakpoints.only('sm')]: {
      height: '300px'
    },
    [theme.breakpoints.only('md')]: {
      height: '260px',
      marginTop: '3rem'
    },
    [theme.breakpoints.only('lg')]: {
      height: '350px'
    },
    [theme.breakpoints.only('xl')]: {
      height: '400px'
    }
  },
  waves: {
    position: 'absolute',
    zIndex: 5,
    top: '130px',
    left: '-50px',
    pointerEvents: 'none',
    [theme.breakpoints.only('xs')]: {
      top: '30px',
      left: '-70px'
    },
    [theme.breakpoints.only('md')]: {
      top: '70px'
    }
  },
  parentLogos: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    height: '7.5rem',
    alignItems: 'center'
  },
  divider: {
    height: '100%',
    width: '1px',
    background: theme.palette.primary.main,
    margin: '0 1rem',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  univerisutyLogo: {
    height: '6rem',
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  insituteLogo: {
    height: '6rem',
    objectFit: 'contain'
  },
  insituteLink: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  insituteName: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    marginLeft: '0.2rem'
  },
  partnershipIcons: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '3rem'
    }
  }
}));

function Index() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GetIndex);

  const home = data?.home?.data?.attributes;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <Container className="index-container" fixed>
      <Helmet>
        <title>{home?.title}</title>
      </Helmet>
      <Grid container component="section">
        <Box clone order={{ xs: 1, md: 1 }}>
          <Grid item xs={12} sm={8} md={6} lg={5} className={classes.container}>
            <div className={classes.parentLogos}>
              <MatLink href={home?.university.link} target="_blank">
                <img
                  src={home.universityLogo.data.attributes.url}
                  alt={home.universityLogo.data.attributes.alternativeText}
                  className={classes.univerisutyLogo}
                />
              </MatLink>
              <div className={classes.divider} />

              <MatLink href={home?.institute.link} target="_blank" className={classes.insituteLink}>
                <img
                  src={home.instituteLogo.data.attributes.url}
                  alt={home.instituteLogo.data.attributes.alternativeText}
                  className={classes.insituteLogo}
                />
                <Typography variant="body1" className={classes.insituteName} align="center">
                  {home?.institute.title}
                </Typography>
              </MatLink>
            </div>
            <img src={circlesSvg} alt="circles" className={classes.circles} />
            <Typography variant="h2" className={classes.title} gutterBottom>
              {home?.title.split(' ').map((word) => (
                <span key={word} className={classes.word}>
                  {word + ' '}
                </span>
              ))}
            </Typography>
            <Typography variant="subtitle1" paragraph className={classes.subtitle}>
              {home?.subtitle}
            </Typography>
            <ButtonLinkOutlined
              title={home?.button.title}
              path={home?.button.link}
              icon={ArrowRightAltIcon}
            />
            <Typography variant="subtitle1" className={classes.partnership} gutterBottom>
              {home?.partnershipText}
            </Typography>
            <Grid container alignItems="center" className={classes.partnershipIcons} spacing={5}>
              {home?.partnershipIcons?.data.map((icon) => (
                <Grid item key={icon.attributes.hash} xs={4}>
                  <img
                    src={icon.attributes.url}
                    alt={icon.attributes.alternativeText}
                    className={classes.partnerImage}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
        <Box clone order={{ xs: 2 }}>
          <Grid item lg={1} />
        </Box>

        <Box clone order={{ xs: 3, md: 3 }}>
          <Grid item xs={12} md={6} lg={6} className={classes.container}>
            <div className={classes.mainMedia}>
              <ReactPlayer
                url={data.home.data?.attributes?.videoLink}
                controls
                width="100%"
                height="100%"
              />
            </div>
            <img src={wavesSvg} alt="waves" className={classes.waves} />
            <Typography variant="h5" className={classes.title} align="center">
              Спеціальність:
            </Typography>
            <Typography
              variant="h4"
              className={classes.highlightedWords}
              gutterBottom
              align="center"
            >
              {home?.speciality}
            </Typography>
            <Typography variant="h5" className={classes.title} align="center">
              Освітня програма:
            </Typography>
            <Typography
              variant="h5"
              className={classes.highlightedWords}
              gutterBottom
              align="center"
            >
              {home?.specialization}
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <IndexWaves />
    </Container>
  );
}

export default Index;
