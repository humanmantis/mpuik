import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ReactPlayer from "react-player/lazy";
import ButtonLinkOutlined from "../components/common/ButtonLinkOutlined";
import IndexWaves from "../components/background/IndexWaves";
import circlesSvg from "../assets/icons/circles.svg";
import wavesSvg from "../assets/icons/waves.svg";
import Loader from "../components/common/Loader";

const GetIndex = loader("../graphql/pages/GetIndexPage.gql");

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  word: {
    "&:nth-child(4)": {
      color: theme.palette.info.main,
    },
    "&:nth-child(5)": {
      color: theme.palette.info.main,
    },
  },
  subtitle: {
    marginBottom: "3rem",
  },
  partnership: {
    marginTop: "3rem",
  },
  partnerImage: {
    maxWidth: "100%",
    pointerEvents: "none",
  },
  circles: {
    position: "absolute",
    zIndex: -5,
    top: "-30px",
    left: "-40px",
  },
  mainMedia: {
    position: "relative",
    margin: "0 auto",
    maxWidth: "100%",
    aspectRatio: "16/9",
    overflow: "hidden",
    borderRadius: "1rem",
    boxShadow: "0px 14px 36px rgba(0, 0, 0, 0.04)",
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.only("xs")]: {
      height: "200px",
      marginBottom: "3rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "300px",
      marginBottom: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      height: "260px",
      marginTop: "3rem",
    },
    [theme.breakpoints.only("lg")]: {
      height: "350px",
    },
    [theme.breakpoints.only("xl")]: {
      height: "400px",
    },
  },
  waves: {
    position: "absolute",
    zIndex: 5,
    top: "130px",
    left: "-50px",
    pointerEvents: "none",
    [theme.breakpoints.only("xs")]: {
      top: "30px",
      left: "-70px",
    },
    [theme.breakpoints.only("md")]: {
      top: "60px",
    },
  },
}));

function Index() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GetIndex);

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <Container className="index-container" fixed>
      <Grid container component="section">
        <Box clone order={{ xs: 3, md: 1 }}>
          <Grid item xs={12} sm={8} md={6} lg={5} className={classes.container}>
            <img src={circlesSvg} alt="circles" className={classes.circles} />
            <Typography variant="h2" className={classes.title} gutterBottom>
              {data.home.data?.attributes?.title.split(" ").map((word) => (
                <span key={word} className={classes.word}>
                  {word + " "}
                </span>
              ))}
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.subtitle}
            >
              {data.home.data?.attributes?.subtitle}
            </Typography>
            <ButtonLinkOutlined
              title={data.home.data?.attributes?.button.title}
              path={data.home.data?.attributes?.button.link}
              icon={ArrowRightAltIcon}
            />
            <Typography
              variant="subtitle1"
              className={classes.partnership}
              gutterBottom
            >
              {data.home.data?.attributes?.partnershipText}
            </Typography>
            <Grid container alignItems="center" spacing={5}>
              {data.home.data?.attributes?.partnershipIcons?.data.map(
                (icon) => (
                  <Grid item key={icon.attributes.hash} xs={4}>
                    <img
                      src={icon.attributes.url}
                      alt={icon.attributes.alternativeText}
                      className={classes.partnerImage}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Box>
        <Box clone order={{ xs: 2 }}>
          <Grid item lg={1} />
        </Box>

        <Box clone order={{ xs: 1, md: 3 }}>
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
          </Grid>
        </Box>
      </Grid>
      <IndexWaves />
    </Container>
  );
}

export default Index;
