import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import TopWaves from "../../components/background/PageWaves";
import CardBlock from "../../components/CardBlock/CardBlock";
import ArticleSmall from "../../components/Article/ArticleSmall";
import Location from "../../components/Location/Location";
import circlesSvg from "../../assets/icons/circles.svg";

const GetProgram = loader("../../graphql/GetProgram.gql");

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: theme.palette.info.main,
  },
  boldText: {
    fontWeight: "bold",
  },
  text: {
    fontWeight: "normal",
  },
  img: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    backgroundColor: theme.palette.grey[300],
    borderRadius: "0.5rem",
    [theme.breakpoints.only("xs")]: {
      height: "250px",
    },
  },
  carouselButton: {
    opacity: 0,
    transition: "0.5s",
    "&:hover": {
      opacity: 1,
    },
  },
  circles: {
    position: "absolute",
    zIndex: -5,
    top: "-23px",
    left: "-42px",
    transform: "scale(0.8)",
  },
  textBlock: {
    position: "relative",
  },
}));

function Program({ params }) {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GetProgram, {
    variables: { slug: params.program },
  });

  const program = data?.programs[0];
  const location = program?.location;

  const windowLocation = useLocation();

  useEffect(() => {
    if (!loading && data && windowLocation.hash) {
      document
        .querySelector(windowLocation.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading, data, windowLocation.hash]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <TopWaves />
      <Container className="main-container" fixed>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} md={6} lg={5} className={classes.textBlock}>
            <img src={circlesSvg} alt="circles" className={classes.circles} />
            <Typography variant="h3" className={classes.title} gutterBottom>
              {program.name}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className={classes.text}
              paragraph
            >
              Освітній рівень:{" "}
              <span className={classes.boldText}>
                {program.level} {program.form && `(${program.form})`}
              </span>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className={classes.text}
              paragraph
            >
              Спеціалізація:{" "}
              <span className={classes.boldText}>{program.specialization}</span>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className={classes.text}
              paragraph
            >
              Термін навчання:{" "}
              <span className={classes.boldText}>{program.term}</span>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className={classes.text}
              paragraph
            >
              Варість навчання:{" "}
              <span className={classes.boldText}>
                {program.price} грн / рік
              </span>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className={classes.boldText}
              paragraph
            >
              <Link href={program.program} target="_blank">
                Освітня програма
              </Link>
            </Typography>
          </Grid>
          <Grid item md={6} lg={5}>
            <Carousel
              animation="slide"
              fullHeightHover={false}
              navButtonsWrapperProps={{ className: classes.carouselButton }}
            >
              {program?.photos?.map((p) => (
                <img
                  key={p.id}
                  src={process.env.REACT_APP_IMAGE_URI + p.url}
                  alt={p.alternativeText}
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
              slug={card.slug}
              title={card.title}
              subtitle={card.subtitle}
              cards={card.cards}
            />
          ) : (
            <ArticleSmall
              key={card.id}
              slug={card.slug}
              title={card.title}
              subtitle={card.subtitle}
              content={card.content}
              photos={card.photos}
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
