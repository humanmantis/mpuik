import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { makeStyles } from '@material-ui/core';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import TopWaves from '../../components/background/PageWaves';
import CardBlock from '../../components/CardBlock/CardBlock';
import ArticleSmall from '../../components/Article/ArticleSmall';
import Location from '../../components/Location/Location';
import circlesSvg from '../../assets/icons/circles.svg';
import Loader from '../../components/common/Loader';

const GetProgram = loader('../../graphql/pages/entrant/GetProgram.gql');

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    color: theme.palette.info.main
  },
  boldText: {
    fontWeight: 'bold'
  },
  text: {
    fontWeight: 'normal'
  },
  img: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    backgroundColor: theme.palette.grey[300],
    borderRadius: '0.5rem',
    [theme.breakpoints.only('xs')]: {
      height: '250px'
    }
  },
  carouselButton: {
    opacity: 0,
    transition: '0.5s',
    '&:hover': {
      opacity: 1
    }
  },
  circles: {
    position: 'absolute',
    zIndex: -5,
    top: '-23px',
    left: '-42px',
    transform: 'scale(0.8)'
  },
  textBlock: {
    position: 'relative'
  }
}));

function Program({ params }) {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GetProgram, {
    variables: { slug: params.program }
  });

  const program = data?.programs.data[0]?.attributes;
  const location = program?.location.data?.attributes;

  const windowLocation = useLocation();

  useEffect(() => {
    if (!loading && data && windowLocation.hash) {
      document
        .querySelector(decodeURI(windowLocation.hash))
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [loading, data, windowLocation.hash]);

  if (loading) return <Loader />;
  if (!program) return <Redirect to="/404" />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <Helmet>
        <title>
          {program.name} - {program.level} | МПУіК
        </title>
      </Helmet>
      <TopWaves />
      <Container className="main-container" fixed>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} md={6} lg={5} className={classes.textBlock}>
            <img src={circlesSvg} alt="circles" className={classes.circles} />
            <Typography variant="h3" className={classes.title} gutterBottom>
              {program.name}
            </Typography>
            <Typography variant="h6" component="p" className={classes.text} paragraph>
              Освітній рівень:{' '}
              <span className={classes.boldText}>
                {program.level} {program.form && `(${program.form})`}
              </span>
            </Typography>
            <Typography variant="h6" component="p" className={classes.text} paragraph>
              Освітня програма: <span className={classes.boldText}>{program.specialization}</span>
            </Typography>
            <Typography variant="h6" component="p" className={classes.text} paragraph>
              Термін навчання: <span className={classes.boldText}>{program.term}</span>
            </Typography>
            <Typography variant="h6" component="p" className={classes.text} paragraph>
              Вартість навчання: <span className={classes.boldText}>{program.price} грн / рік</span>
            </Typography>
            <Typography variant="h6" component="p" className={classes.boldText} paragraph>
              <Link href={program.program} target="_blank">
                Освітньо-професійна програма
              </Link>
            </Typography>
          </Grid>
          <Grid item md={6} lg={5}>
            <Carousel
              animation="slide"
              fullHeightHover={false}
              navButtonsWrapperProps={{ className: classes.carouselButton }}
            >
              {program?.photos.data?.map((p) => (
                <img
                  key={p.attributes.hash}
                  src={p.attributes.url}
                  alt={p.attributes.alternativeText}
                  className={classes.img}
                />
              ))}
            </Carousel>
          </Grid>
        </Grid>
        {program.cards.map((card) =>
          card.cards ? (
            <CardBlock
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              variant={card.variant}
              cards={card.cards}
            />
          ) : (
            <ArticleSmall
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              content={card.content}
              photos={card.photos.data}
            />
          )
        )}
      </Container>
      {location && (
        <Location
          title={location.title}
          list={location.list}
          address={location.address}
          phone={location.phone}
          email={location.email}
          latitude={location.latitude}
          longitude={location.longitude}
        />
      )}
    </>
  );
}

export default Program;
