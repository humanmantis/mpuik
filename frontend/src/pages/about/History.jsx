import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { makeStyles } from '@material-ui/core';
import { Container, Grid, Paper, Collapse, Button } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GalleryV1 from '../../components/Gallery/GalleryV1';
import Location from '../../components/Location/Location';
import PageTitle from '../../components/common/PageTitle';
import Markdown from '../../components/common/Markdown';
import TopWaves from '../../components/background/PageWaves';
import Loader from '../../components/common/Loader';

const GetHistoryPage = loader('../../graphql/pages/about/GetHistoryPage.gql');

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '600px',
    [theme.breakpoints.only('lg')]: {
      height: '550px',
    },
    [theme.breakpoints.only('md')]: {
      height: '550px',
    },
    [theme.breakpoints.only('sm')]: {
      height: '300px',
    },
    [theme.breakpoints.only('xs')]: {
      height: '150px',
    },
  },
  top: {
    maxWidth: '800px',
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: '3rem',
  },
  content: {
    margin: '0 auto',
    padding: '5rem 7rem',
    paddingBottom: '4rem',
    maxWidth: '1000px',
    background: '#fff',
    boxShadow: '0px 14px 36px rgba(0, 0, 0, 0.04)',
    borderRadius: '1rem',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '3rem 4rem',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '2rem 1rem',
    },
  },
  mainMedia: {
    position: 'absolute',
    width: '100%',
    maxHeight: '800px',
    objectFit: 'cover',
    borderRadius: '1rem',
    backgroundColor: theme.palette.grey[300],
    left: 0,
    bottom: '50px',
    zIndex: -5,
    [theme.breakpoints.only('xs')]: {
      bottom: '30px',
    },
  },
  button: {
    marginTop: '1rem',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    borderRadius: '1rem',
  },
  containerCollapse: {
    backgroundImage:
      'linear-gradient(180deg, transparent 0%, transparent 80%, rgba(0,0,0,0.2) 100%)',
  },
  enteredrCollapse: {
    backgroundImage: 'none',
  },
  margin: {
    marginTop: '5rem',
  },
}));

function History() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GetHistoryPage);
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  const history = data?.history;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <TopWaves />
      <Container className="main-container" fixed>
        <Grid
          container
          component="section"
          alignContent="center"
          justify="center"
        >
          <PageTitle title={history.title} subtitle={history.subtitle} />
          <Grid item xs={12}>
            <Paper component="article" className={classes.content}>
              <Collapse
                in={checked}
                collapsedHeight={400}
                classes={{
                  container: classes.containerCollapse,
                  entered: classes.enteredrCollapse,
                }}
              >
                <Markdown content={history?.content} />
              </Collapse>
              <Button
                onClick={handleChange}
                endIcon={checked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                className={classes.button}
              >
                Показати {checked ? 'менше' : 'більше'}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {history?.image && (
        <div className={classes.container}>
          <img
            src={process.env.REACT_APP_IMAGE_URI + data.history.image.url}
            alt={history.alternativeText}
            className={classes.mainMedia}
          />
        </div>
      )}

      {history?.gallery && (
        <GalleryV1
          title={history.gallery.title}
          subtitle={history.gallery.subtitle}
          gallery={history.gallery.photos}
        />
      )}

      {history?.location && (
        <Location
          title={history.location.title}
          address={history.location.address}
          phone={history.location.phone}
          email={history.location.email}
          list={history.location.list}
          latitude={history.location.latitude}
          longitude={history.location.longitude}
          className={classes.margin}
        />
      )}
    </>
  );
}

export default History;
